import { createFileRoute } from '@tanstack/react-router';
import React from 'react';
import { ExampleSection } from '#routes/-helpers/examples';
import { Option, Select } from '@admiral-ds/react-ui';
import type { SelectProps } from '@admiral-ds/react-ui';

export const Template = ({ placeholder = 'Серийный номер', ...props }: SelectProps) => {
  const [selectValue, setSelectValue] = React.useState<string[]>(
    Array.from({ length: 20 }).map((_, ind) => String(ind)),
  );

  const handleSelectedChange = (value: string | Array<string>) => {
    if (Array.isArray(value)) setSelectValue(value);
  };

  return (
    <ExampleSection
      text="Для ограничения высоты Select в режиме multiple необходимо использовать свойства maxRowCount и minRowCount. В
        примере стоит ограничение maxRowCount=3. Ограничение работает для Select как в состоянии focused, так и в
        состоянии, когда компонент не находится в фокусе"
    >
      <Select
        {...props}
        placeholder={placeholder}
        value={selectValue}
        mode="searchSelect"
        multiple={true}
        onSelectedChange={handleSelectedChange}
        maxRowCount={3}
      >
        {Array.from({ length: 20 }).map((_option, ind) => (
          <Option key={ind} value={`${ind}0000`}>
            {`${ind}0000`}
          </Option>
        ))}
      </Select>
    </ExampleSection>
  );
};

export const Route = createFileRoute('/components/select/multiSelectExpandedHeight')({
  component: () => <Template />,
  staticData: {
    title: 'mode="multiple" с увеличенной по умолчанию высотой',
  },
});
