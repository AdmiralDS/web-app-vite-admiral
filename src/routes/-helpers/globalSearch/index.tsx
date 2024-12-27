import {
  getTextHighlightMeta,
  GlobalSearch,
  GlobalSearchProps,
  HighlightFormat,
  InputIconButton,
  MenuItem,
  RenderOptionProps,
  useDebounce,
} from '@admiral-ds/react-ui';
import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import styled from 'styled-components';
import TimeOutline from '@admiral-ds/icons/build/system/TimeOutline.svg?react';
import CloseOutlineSvg from '@admiral-ds/icons/build/service/CloseOutline.svg?react';
import SearchOutline from '@admiral-ds/icons/build/system/SearchOutline.svg?react';

export interface GlobalSearchWithLogicProps extends Omit<GlobalSearchProps, 'onChange' | 'model'> {}

const Item = styled(MenuItem)`
  gap: 8px;
`;
const TextBlock = styled.div`
  flex: 1 1 auto;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const Highlight = styled.span`
  color: var(--admiral-color-Primary_Primary60Main, ${(p) => p.theme.color['Primary/Primary 60 Main']});
`;

function getHighlightedText(text = '', highlight = '', highlightFormat: HighlightFormat = 'wholly') {
  const { parts, chunks } = getTextHighlightMeta(text, highlight, highlightFormat);

  return parts.map((part, i) =>
    chunks.indexOf(part.toLowerCase()) >= 0 ? <Highlight key={i}>{part}</Highlight> : part,
  );
}

async function searchPeopleByName(name: string) {
  const response = await fetch(
    'https://swapi.dev/api/people/?' +
      new URLSearchParams({
        search: name,
      }),
  );
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
}

export const GlobalSearchWithLogic = ({ submitButtonProps, prefixValue, prefixValueList, onPrefixValueChange, ...props }: GlobalSearchWithLogicProps) => {
  const [history, setHistory] = useState<Array<{ value: string; text: string }>>([]);
  const [searchValue, setSearchValue] = useState('');

  const [options, setOptions] = useState<Array<{ value: string; text: string }>>([]);

  const [filter, setFilter] = useState('');

  const model = [
    ...history
      .filter((item) => item.text.includes(filter) || filter === '')
      .map((item, index) => ({
        id: item.text,
        render: (options: RenderOptionProps) => (
          <Item {...options} key={item.text + '_history_' + index}>
            <TimeOutline width={options.dimension === 's' ? 20 : 24} />
            <TextBlock>{getHighlightedText(item.text, searchValue)}</TextBlock>
            {options.hovered && (
              <InputIconButton
                icon={CloseOutlineSvg}
                key="clear-icon"
                aria-hidden
                width={options.dimension === 's' ? 20 : 24}
                onMouseDown={(e) => {
                  setHistory((old) => old.toSpliced(index, 1));
                  e.preventDefault();
                  e.stopPropagation();
                }}
              />
            )}
          </Item>
        ),
      })),
    ...options
      .filter((item) => item.text.includes(filter))
      .filter((item) => history.every((hist) => hist.text !== item.text))
      .map((item, index) => ({
        id: item.text,
        render: (options: RenderOptionProps) => (
          <Item {...options} key={item.text + '_suggest_' + index}>
            <SearchOutline width={options.dimension === 's' ? 20 : 24} />
            <TextBlock>{getHighlightedText(item.text, searchValue)}</TextBlock>
          </Item>
        ),
      })),
  ];

  if (model.length === 0) {
    model.push({
      id: 'Нет совпадений',
      render: () => (
        <Item disabled>
          <TextBlock>Нет совпадений</TextBlock>
        </Item>
      ),
    });
  }

  const debouncedFilter = useDebounce(filter, 500);
  const { data, isLoading } = useQuery({
    queryKey: ['people', debouncedFilter],
    queryFn: () => searchPeopleByName(debouncedFilter),
  });

  useEffect(() => {
    if (data) {
      const names = data['results'] as Array<{ name: string }>;
      const options = names.map(({ name }) => ({ value: name, text: name }));
      setOptions(options);
    }
  }, [data]);

  const handleOnChange = (value: string) => {
    // eslint-disable-next-line no-console
    console.log(`handleOnChange ${value}`);
    setSearchValue(value);
    setFilter(value);
  };

  const handleSubmitButtonClick = () => {
    const value = searchValue;
    // eslint-disable-next-line no-console
    console.log(`handleSubmitButtonClick ${value}`);
    setHistory((oldHistory) =>
      oldHistory.findIndex((elem) => elem.text === value) < 0 ? [{ value, text: value }, ...oldHistory] : oldHistory,
    );
  };

  return (
    <GlobalSearch
      {...props}
      prefixValue={prefixValue}
      prefixValueList={prefixValueList}
      onPrefixValueChange={onPrefixValueChange}
      value={searchValue}
      onChange={handleOnChange}
      submitButtonProps={{ ...submitButtonProps, onClick: handleSubmitButtonClick }}
      isLoading={isLoading}
      model={model.slice(0, 10)}
    />
  );
};
