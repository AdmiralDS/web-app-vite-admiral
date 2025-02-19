import { createFileRoute } from '@tanstack/react-router';
import * as React from 'react';
import type { ChangeEvent } from 'react';
import { Option, OptionGroup, Select, typography } from '@admiral-ds/react-ui';
import type { SelectProps } from '@admiral-ds/react-ui';
import styled from 'styled-components';
import { ExampleSection } from '../../-helpers/examples';

const OPTIONS_PEOPLE = [
  'Саша Даль',
  'Алексей Елесин',
  'Константин Ионочкин',
  'Анна Корженко',
  'Фидель',
  'Константин Колешонок',
  'Алексей Орлов',
];

export const StyledGroup = styled(OptionGroup)`
  color: var(--admiral-color-Purple_Purple60Main, ${(p) => p.theme.color['Purple/Purple 60 Main']});
  ${typography['Header/H5']}
`;

export const Template = (props: SelectProps) => {
  const [selectValue, setSelectValue] = React.useState<string>('Похо Торо Моронго');
  const onChange = (e: ChangeEvent<HTMLSelectElement>) => setSelectValue(e.target.value);

  const renderOptions = (data: string[]) => {
    return data.map((option) => (
      <Option key={option} value={option}>
        {option}
      </Option>
    ));
  };

  return (
    <>
      <ExampleSection>
        <Select {...props} value={selectValue} mode="searchSelect" onChange={onChange} dimension="xl">
          <StyledGroup label="Сегодня выступают">
            <Option value="Анигиляторная пушка">Анигиляторная пушка</Option>
            <Option value="Похо Торо Моронго">Похо Торо Моронго</Option>
          </StyledGroup>
          <OptionGroup label="Группа фрукты" disabled>
            {renderOptions(OPTIONS_PEOPLE)}
          </OptionGroup>
        </Select>
      </ExampleSection>
    </>
  );
};

export const Route = createFileRoute('/components/select/groupOfOptions')({
  component: () => <Template />,
  staticData: {
    title: 'Использование групп',
  },
});
