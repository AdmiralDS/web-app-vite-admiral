import { createFileRoute } from '@tanstack/react-router';
import { ExampleSection } from '#routes/-helpers/examples';
import { Option, Select, defaultFilterItem, typography } from '@admiral-ds/react-ui';
import type { SelectProps, SearchFormat } from '@admiral-ds/react-ui';
import React, { ChangeEvent } from 'react';

import styled, { css, keyframes } from 'styled-components';

type OptionsType = {
  value: string;
  text: string;
  extraText: string;
};
type MyCustomOptionProps = {
  shouldAnimate?: boolean;
  text: string;
  extraText: string;
};

const OPTIONS = [
  {
    value: 'val1',
    text: 'Текст 1',
    extraText: 'Доооп Текст 1',
  },
  {
    value: 'val2',
    text: 'Текст 2',
    extraText: 'Доп Теttкст 2',
  },
  {
    value: 'val3',
    text: 'Текст 3',
    extraText: 'дддопТекст 3',
  },
  {
    value: 'val4',
    text: 'Текст 444',
    extraText: 'Доооп Тексттт 41232',
  },
];

const jump = keyframes`
  50% {
    transform: translate3d(0, -7px, 0);
  }
`;
const animation = css`
  animation: ${jump} 0.35s ease-in-out;
`;
const Icon = styled.div<{ $shouldAnimate?: boolean }>`
  width: 20px;
  height: 20px;
  border: 1px solid #8a96a8;
  border-radius: 50%;
  box-sizing: border-box;
  margin-right: 10px;
  transform-origin: bottom center;
  ${({ $shouldAnimate }) => ($shouldAnimate ? animation : '')}
`;
const TextWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  column-gap: 8px;
`;
const ExtraText = styled.div`
  color: var(--admiral-color-Neutral_Neutral30, ${(p) => p.theme.color['Neutral/Neutral 30']});
  ${typography['Body/Body 2 Short']}
`;

export const Template = ({ options = OPTIONS, ...props }: SelectProps & { options?: OptionsType[] }) => {
  const [selectValue, setSelectValue] = React.useState<string>(props.value ? String(props.value) : options[2].value);
  const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectValue(e.target.value);
    props.onChange?.(e);
  };
  const [hoverValue, setHoverValue] = React.useState<string>('');

  const handleFilterItem = (value: string, searchValue: string, searchFormat: SearchFormat) => {
    const option = options.find((item) => item.value === value);
    return (
      !!option &&
      (defaultFilterItem(value, searchValue, searchFormat) ||
        defaultFilterItem(option.text, searchValue, searchFormat) ||
        defaultFilterItem(option.extraText, searchValue, searchFormat))
    );
  };

  const MyCustomOption = ({ text, extraText, shouldAnimate }: MyCustomOptionProps) => (
    <>
      <Icon $shouldAnimate={shouldAnimate} />
      <TextWrapper>
        {text}
        <ExtraText>{extraText}</ExtraText>
      </TextWrapper>
    </>
  );

  const renderOptions = () => {
    return options.map((option) => (
      <Option
        key={option.value}
        value={option.value}
        onMouseEnter={() => setHoverValue(option.value)}
        onMouseLeave={() => setHoverValue('')}
      >
        <MyCustomOption
          text={option.text}
          extraText={option.extraText}
          shouldAnimate={option.value === hoverValue && option.value !== selectValue}
        />
      </Option>
    ));
  };

  return (
    <>
      <ExampleSection text="Фильтрация элементов по значению, тексту и дополнительному тексту">
        <Select
          {...props}
          id="props_id"
          value={selectValue}
          mode="searchSelect"
          onChange={onChange}
          onFilterItem={handleFilterItem}
        >
          {renderOptions()}
        </Select>
      </ExampleSection>
    </>
  );
};

export const Route = createFileRoute('/components/select/customOptionsWithCustomFilter')({
  component: () => <Template />,
  staticData: {
    title: 'Кастомные опции с кастомной фильтрацией',
  },
});
