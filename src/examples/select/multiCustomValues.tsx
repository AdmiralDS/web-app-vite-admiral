import { createFileRoute } from '@tanstack/react-router';
import { ExampleSection } from '#routes/-helpers/examples';
import { Option, Select, SelectValueWrapper } from '@admiral-ds/react-ui';
import Cuba from '@admiral-ds/icons/build/flags/Cuba.svg?react';
import Belarus from '@admiral-ds/icons/build/flags/Belarus.svg?react';
import RussianFederation from '@admiral-ds/icons/build/flags/RussianFederation.svg?react';

import * as React from 'react';
import styled, { css } from 'styled-components';
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
  color: var(--admiral-color-Magenta_Magenta50, ${(p) => p.theme.color['Magenta/Magenta 50']});
  display: flex;
  column-gap: 8px;
  margin: 0;
  padding: 0 3px;
  border-width: 1px;
  border-style: dotted;
  border-radius: 4px;
  border-color: var(--admiral-color-Magenta_Magenta50, ${(p) => p.theme.color['Magenta/Magenta 50']});
`;

const MultipleMixin = css`
  & ${SelectValueWrapper} {
    padding-left: 0;
    column-gap: 16px;
    max-height: none;
  }
`;

const CustomSelect = styled(Select)<{ multiple?: boolean }>`
  ${(p) => p.multiple && MultipleMixin}
`;

export const Template = ({
  placeholder = 'Города',
  options = OPTIONS_PEOPLE,
  ...props
}: SelectProps & { options?: string[] }) => {
  const [selectValueExample1, setSelectValueExample1] = React.useState<string[]>([]);
  const onChange1 = (value: string | Array<string>) => {
    if (Array.isArray(value)) setSelectValueExample1(value);
  };

  const getFlag = (value: string) => {
    return value === 'Фидель' ? Cuba : value === 'Константин Колешонок' ? Belarus : RussianFederation;
  };

  const renderOptions = () => {
    return options.map((option) => (
      <Option key={option} value={option}>
        {option}
      </Option>
    ));
  };

  const renderValue = (value: string | string[] | undefined) => {
    if (Array.isArray(value)) {
      return value.map((item) => {
        const Flag = getFlag(item);
        return (
          <RenderingValue key={item}>
            <Flag height={24} />
            {item}
          </RenderingValue>
        );
      });
    }
  };

  return (
    <>
      <ExampleSection text="Для кастомного отображения выбранных значений необходимо использовать свойства renderSelectValue и multiple. В renderSelectValue передается функция, получающая выбранные значения, и, возвращающая map из отображаемых ReactNode.">
        <CustomSelect
          {...props}
          id="props_id1"
          placeholder={placeholder}
          dropContainerClassName="dropContainerClass"
          renderSelectValue={renderValue}
          value={selectValueExample1}
          onSelectedChange={onChange1}
          displayClearIcon={true}
          multiple={true}
        >
          {renderOptions()}
        </CustomSelect>
      </ExampleSection>
    </>
  );
};

export const Route = createFileRoute('/components/select/multiCustomValues')({
  component: () => <Template />,
  staticData: {
    title: 'Кастомное отображение значений с множественным выбором',
  },
});
