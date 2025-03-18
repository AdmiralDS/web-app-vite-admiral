import { ExampleSection } from '#examples/-helpers';
import { Option, Select } from '@admiral-ds/react-ui';

import * as React from 'react';
import type { ChangeEvent } from 'react';
import type { SelectProps } from '@admiral-ds/react-ui';

const OPTIONS_CITIES = ['Москва', 'Санкт-Петербург', 'Ижевск', 'Тверь', 'Рязань'];

export const SelectBasic = ({
  placeholder = 'Город',
  options = OPTIONS_CITIES,
  ...props
}: SelectProps & { options?: string[] }) => {
  const [selectValueExample1, setSelectValueExample1] = React.useState<string>('');
  const onChange1 = (e: ChangeEvent<HTMLSelectElement>) => setSelectValueExample1(e.target.value);

  const [selectValueExample2, setSelectValueExample2] = React.useState<string>('');
  const onChange2 = (e: ChangeEvent<HTMLSelectElement>) => setSelectValueExample2(e.target.value);

  const handleSelectedChange = (value: string | Array<string>) => {
    // eslint-disable-next-line no-console
    console.log(value);
  };

  const renderOptions = () => {
    return options.map((option, ind) => (
      <Option key={option} value={option} disabled={ind === 3}>
        {option}
      </Option>
    ));
  };

  return (
    <>
      <ExampleSection text='Стандартный Select (default: mode = "select")'>
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
      </ExampleSection>
      <ExampleSection text='mode = "searchSelect"'>
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
      </ExampleSection>
    </>
  );
};
