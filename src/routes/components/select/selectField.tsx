import { createFileRoute } from '@tanstack/react-router';
import { ExampleSection } from '../../-helpers/examples';
import { SelectField, Option } from '@admiral-ds/react-ui';

import * as React from 'react';
import type { ChangeEvent } from 'react';
import { SearchSelectFieldProps } from '@admiral-ds/react-ui';

const OPTIONS_CITIES = ['Москва', 'Санкт-Петербург', 'Ижевск', 'Тверь', 'Рязань'];

export const Template = ({
  placeholder = 'Город',
  label = 'Где находится компания?',
  options = OPTIONS_CITIES,
  ...props
}: SearchSelectFieldProps & { options?: string[] }) => {
  const [selectValue, setSelectValue] = React.useState<string>('');
  const onChange = (e: ChangeEvent<HTMLSelectElement>) => setSelectValue(e.target.value);

  const renderOptions = () => {
    return options.map((option, ind) => (
      <Option key={option} value={option} disabled={ind === 3}>
        {option}
      </Option>
    ));
  };

  return (
    <>
      <ExampleSection text="SelectField">
        <SelectField
          data-container-id="selectFieldIdOne"
          {...props}
          mode="searchSelect"
          label={label}
          className="Search"
          value={selectValue}
          onChange={onChange}
          placeholder={placeholder}
        >
          {renderOptions()}
        </SelectField>
      </ExampleSection>
    </>
  );
};

export const Route = createFileRoute('/components/select/selectField')({
  component: () => <Template />,
  staticData: {
    title: 'SelectField. Базовый пример',
  },
});
