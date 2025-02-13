import { createFileRoute } from '@tanstack/react-router';
import { ExampleSection } from '../../-helpers/examples';
import { Option, Select, Field } from '@admiral-ds/react-ui';

import * as React from 'react';
import type { ChangeEvent } from 'react';
import type { SelectProps, FieldProps } from '@admiral-ds/react-ui';

export const OPTIONS_CITIES = ['Москва', 'Санкт-Петербург', 'Ижевск', 'Тверь', 'Рязань'];

const renderOptions = () => {
  return OPTIONS_CITIES.map((option, ind) => (
    <Option key={option} value={option} disabled={ind === 3}>
      {option}
    </Option>
  ));
};

export const Template = ({
  placeholder = 'Город',
  label = 'Где находится компания?',
  ...props
}: SelectProps & FieldProps) => {
  const [selectValueExample1, setSelectValueExample1] = React.useState('');
  const onChange1 = (e: ChangeEvent<HTMLSelectElement>) => setSelectValueExample1(e.target.value);

  const [selectValueExample2, setSelectValueExample2] = React.useState('');
  const onChange2 = (e: ChangeEvent<HTMLSelectElement>) => setSelectValueExample2(e.target.value);

  const handleSelectedChange = (value: string | Array<string>) => {
    // eslint-disable-next-line no-console
    console.log(value);
  };

  return (
    <>
      <ExampleSection text="Стандартный Select">
        <Field label={label} id="props_id0">
          <Select
            {...props}
            id="props_id0"
            value={selectValueExample1}
            onChange={onChange1}
            onSelectedChange={handleSelectedChange}
            placeholder={placeholder}
            dropContainerClassName="dropContainerClass"
          >
            {renderOptions()}
          </Select>
        </Field>
      </ExampleSection>
      <ExampleSection text="SelectSearch">
        <Field label={label} id="props_id1">
          <Select
            {...props}
            id="props_id1"
            value={selectValueExample2}
            onChange={onChange2}
            onSelectedChange={handleSelectedChange}
            placeholder={placeholder}
            dropContainerClassName="dropContainerClass"
            mode="searchSelect"
          >
            {renderOptions()}
          </Select>
        </Field>
      </ExampleSection>
    </>
  );
};

export const Route = createFileRoute('/components/select/')({
  component: () => <Template />,
  staticData: {
    title: 'Select. Базовый пример',
  },
});
