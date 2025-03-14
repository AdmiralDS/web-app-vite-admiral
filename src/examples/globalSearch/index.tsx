import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import styled from 'styled-components';
import { ExampleSection, PStyled } from '#routes/-helpers/examples';
import {
  getTextHighlightMeta,
  GlobalSearch,
  HighlightFormat,
  InputIconButton,
  MenuItem,
  RenderOptionProps,
  useDebounce,
} from '@admiral-ds/react-ui';
import SearchOutline from '@admiral-ds/icons/build/system/SearchOutline.svg?react';
import TimeOutline from '@admiral-ds/icons/build/system/TimeOutline.svg?react';
import CloseOutlineSvg from '@admiral-ds/icons/build/service/CloseOutline.svg?react';

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

const PREFIX_OPTIONS = ['prefix One', 'prefix Two', 'prefix Three'];

export const GlobalSearchBasic = () => {
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

  const [prefixValue, setPrefixValue] = useState<React.ReactNode>('prefix One');

  return (
    <ExampleSection
      text={
        <>
          <PStyled>
            Если пользователь впервые пользуется компонентом, то меню не появляется. Иначе, отображается меню,
            содержащее до 10 ранее введенных запросов, без скрола. Такие запросы можно удалять – при ховере над пунктами
            появляется иконка удаления. Важно, что не происходит автоматический фокус на первом пункте меню.
          </PStyled>
          <PStyled>
            Если введены какие то буквы, показывается до 10 вариантов совпадений. Если есть совпадения с ранними
            значениями поиска, то они показываются в первую очередь с иконкой часов. Сортируются по времени – сверху
            более «свежие». Далее идут прочие совпадения в алфавитном порядке с иконкой поиска.
          </PStyled>
          <PStyled>Поведение кнопки</PStyled>
          <PStyled>
            Кнопка ведет себя стандартно, как Primary Button. Нажатие клавиши «Enter» или кнопки «Найти», если фокус не
            на одном из пунктов меню, посылает запрос по тексту в поле, НЕ подставляя недостающие буквы из первого
            совпадения в меню.
          </PStyled>
          <PStyled>Если поиск занимает больше одной секунды, то появляется индикатор загрузки.</PStyled>
          <PStyled>Навигация, управление</PStyled>
          <PStyled>
            Клик мышкой выбирает нужный пункт меню, который подставляется в поле и сразу отправляет поисковой запрос с
            выдачей результатов.
          </PStyled>
          <PStyled>Нюансы</PStyled>
          <PStyled>
            Если, вводя запрос, вывести фокус из поля, кликнув вне области компонента, то запрос не будет осуществлен,
            но введенные буквы останутся в поле. Что бы отправить запрос, надо нажать кнопку поиска, либо, при активном
            поле, нажать «Enter».
          </PStyled>
          <PStyled>
            Если пользователь пишет по-русски, но в английской раскладке, то система может автоматически распознавать
            это так, как если бы писали верно и выводить релевантные результаты. Но реализация такого функционала лежит
            на пользователях, является кастомной и не входит в базовые функции компонента.
          </PStyled>
        </>
      }
    >
      <GlobalSearch
        prefixValue={prefixValue}
        prefixValueList={PREFIX_OPTIONS}
        onPrefixValueChange={setPrefixValue}
        value={searchValue}
        onChange={handleOnChange}
        submitButtonProps={{ onClick: handleSubmitButtonClick }}
        isLoading={isLoading}
        model={model.slice(0, 10)}
      />
    </ExampleSection>
  );
};
