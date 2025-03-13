import { createFileRoute } from '@tanstack/react-router';
import { ExampleSection } from '#routes/-helpers/examples';
import { Option, Select } from '@admiral-ds/react-ui';

import * as React from 'react';
import type { ChangeEvent } from 'react';
import type { SelectProps } from '@admiral-ds/react-ui';

const OPTIONS_CITIES = ['Москва', 'Санкт-Петербург', 'Ижевск', 'Тверь', 'Рязань'];

export const Template = ({
  placeholder = 'Город',
  options = OPTIONS_CITIES,
  ...props
}: SelectProps & { options?: string[] }) => {
  const [selectValueSuccess, setSelectValueSuccess] = React.useState<string>('');
  const onChangeSuccess = (e: ChangeEvent<HTMLSelectElement>) => setSelectValueSuccess(e.target.value);

  const [selectValueError, setSelectValueError] = React.useState<string>('');
  const onChangeError = (e: ChangeEvent<HTMLSelectElement>) => setSelectValueError(e.target.value);

  const renderOptions = () => {
    return options.map((option, ind) => (
      <Option key={option} value={option} disabled={ind === 3}>
        {option}
      </Option>
    ));
  };

  return (
    <>
      <ExampleSection text="Статус success">
        <Select
          {...props}
          id="props_id0"
          value={selectValueSuccess}
          onChange={onChangeSuccess}
          placeholder={placeholder}
          dropContainerClassName="dropContainerClass"
          status="success"
        >
          {renderOptions()}
        </Select>
      </ExampleSection>
      <ExampleSection text="Статус error">
        <Select
          {...props}
          id="props_id1"
          value={selectValueError}
          onChange={onChangeError}
          placeholder={placeholder}
          dropContainerClassName="dropContainerClass"
          status="error"
        >
          {renderOptions()}
        </Select>
      </ExampleSection>
    </>
  );
};

export const Route = createFileRoute('/components/select/status')({
  component: () => <Template />,
  staticData: {
    title: 'Select. Статусы',
  },
});
