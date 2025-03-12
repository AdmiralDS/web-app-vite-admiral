import { createFileRoute } from '@tanstack/react-router';
import * as React from 'react';

import { Option, Select } from '@admiral-ds/react-ui';
import type { SelectProps } from '@admiral-ds/react-ui';
import { ExampleSection } from '../../-helpers/examples';

const createClearOptions = (length: number) => {
  return Array.from({ length }).map((_, index) => ({ text: `${index}0000`, value: String(index) }));
};
const OPTIONS = createClearOptions(20);

export const Template = ({ placeholder = 'Серийный номер', ...props }: SelectProps) => {
  const renderOptions = React.useMemo(() => {
    return OPTIONS.map((item, index) => (
      <Option value={item.value} key={`${index}`}>
        {item.text}
      </Option>
    ));
  }, []);

  return (
    <ExampleSection>
      <Select {...props} mode="searchSelect" placeholder={placeholder} virtualScroll={{ itemHeight: 'auto' }}>
        {renderOptions}
      </Select>
    </ExampleSection>
  );
};

export const Route = createFileRoute('/components/select/virtualScroll')({
  component: () => <Template />,
  staticData: {
    title: 'VirtualScroll',
  },
});
