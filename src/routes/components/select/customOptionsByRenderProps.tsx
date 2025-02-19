import { createFileRoute } from '@tanstack/react-router';
import { ExampleSection } from '../../-helpers/examples';
import { Option, Select, MenuItem, typography } from '@admiral-ds/react-ui';
import type { SelectProps } from '@admiral-ds/react-ui';
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
const CustomOptionWrapper = styled(MenuItem)`
  justify-content: flex-start;
  flex-wrap: nowrap;
  white-space: pre-wrap;
`;

export const Template = ({ options = OPTIONS, ...props }: SelectProps & { options?: OptionsType[] }) => {
  const [selectValue, setSelectValue] = React.useState<string>(props.value ? String(props.value) : options[2].value);
  const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectValue(e.target.value);
    props.onChange?.(e);
  };

  const MyCustomOption = ({ text, extraText, shouldAnimate, ...props }: MyCustomOptionProps) => (
    <CustomOptionWrapper {...props}>
      <Icon $shouldAnimate={shouldAnimate} />
      <TextWrapper>
        {text}
        <ExtraText>{extraText}</ExtraText>
      </TextWrapper>
    </CustomOptionWrapper>
  );

  const renderOptions = () => {
    return options.map(({ text, value, extraText }) => (
      <Option
        key={value}
        value={value}
        renderOption={(options) => (
          <MyCustomOption
            text={text}
            extraText={extraText}
            shouldAnimate={options.hovered && value !== selectValue}
            {...options}
            key={value}
          />
        )}
      />
    ));
  };

  return (
    <>
      <ExampleSection text="Пример кастомизации select через renderProps">
        <Select {...props} id="props_id" mode="searchSelect" value={selectValue} onChange={onChange}>
          {renderOptions()}
        </Select>
      </ExampleSection>
    </>
  );
};

export const Route = createFileRoute('/components/select/customOptionsByRenderProps')({
  component: () => <Template />,
  staticData: {
    title: 'Кастомные опции через renderProps',
  },
});
