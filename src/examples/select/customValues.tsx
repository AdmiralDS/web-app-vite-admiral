import { createFileRoute } from '@tanstack/react-router';
import { ExampleSection } from '#routes/-helpers/examples';
import { Option, Select } from '@admiral-ds/react-ui';
import Cuba from '@admiral-ds/icons/build/flags/Cuba.svg?react';
import Belarus from '@admiral-ds/icons/build/flags/Belarus.svg?react';
import RussianFederation from '@admiral-ds/icons/build/flags/RussianFederation.svg?react';

import * as React from 'react';
import styled from 'styled-components';
import type { ChangeEvent } from 'react';
import type { SelectProps } from '@admiral-ds/react-ui';

const OPTIONS_PEOPLE = [
  'Саша Даль',
  'Алексей Елесин',
  'Константин Ионочкин',
  'Анна Корженко',
  'Фидель',
  'Константин Колешонок',
  'Алексей Орлов',
];

const RenderingValue = styled.div`
  color: var(--admiral-color-Teal_Teal80, ${(p) => p.theme.color['Teal/Teal 80']});
  display: flex;
  flex: 1 1 100%;
  column-gap: 8px;
  padding: 0 3px;
  border-width: 1px;
  border-style: dotted;
  border-radius: 4px;
  border-color: var(--admiral-color-Teal_Teal80, ${(p) => p.theme.color['Teal/Teal 80']});
  background-color: var(--admiral-color-Teal_Teal10, ${(p) => p.theme.color['Teal/Teal 10']});
  box-sizing: border-box;
`;

export const Template = ({
  placeholder = 'Города',
  options = OPTIONS_PEOPLE,
  ...props
}: SelectProps & { options?: string[] }) => {
  const [selectValueExample1, setSelectValueExample1] = React.useState<string>('');
  const onChange1 = (e: ChangeEvent<HTMLSelectElement>) => setSelectValueExample1(e.target.value);

  const [selectValueExample2, setSelectValueExample2] = React.useState<string>('');
  const onChange2 = (e: ChangeEvent<HTMLSelectElement>) => setSelectValueExample2(e.target.value);

  const getFlag = (value: string) => {
    return value === 'Фидель' ? Cuba : value === 'Константин Колешонок' ? Belarus : RussianFederation;
  };

  const renderOptions = () => {
    return options.map((option, ind) => (
      <Option key={ind} value={option}>
        {option}
      </Option>
    ));
  };

  const renderValue = (value: string | string[] | undefined) => {
    if (typeof value === 'string' && !!value) {
      const Flag = getFlag(value);

      return (
        <RenderingValue>
          <Flag height={24} />
          {value}
        </RenderingValue>
      );
    }
  };

  return (
    <>
      <ExampleSection text="Для кастомного отображения выбранного значения необходимо использовать свойство renderSelectValue. Туда передается функция, получающая выбранные значения, и, возвращающая отображаемый ReactNode.">
        <Select
          {...props}
          id="props_id1"
          value={selectValueExample1}
          onChange={onChange1}
          placeholder={placeholder}
          dropContainerClassName="dropContainerClass"
          renderSelectValue={renderValue}
        >
          {renderOptions()}
        </Select>
      </ExampleSection>
      <ExampleSection text='Для кастомного отображения выбранного значения в SearchSelect, дополнительно установим mode="searchSelect"'>
        <Select
          {...props}
          id="props_id2"
          value={selectValueExample2}
          onChange={onChange2}
          placeholder={placeholder}
          dropContainerClassName="dropContainerClass"
          mode="searchSelect"
          renderSelectValue={renderValue}
        >
          {renderOptions()}
        </Select>
      </ExampleSection>
    </>
  );
};

export const Route = createFileRoute('/components/select/customValues')({
  component: () => <Template />,
  staticData: {
    title: 'Кастомное отображение значений',
  },
});
