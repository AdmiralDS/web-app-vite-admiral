import { ExampleSection } from '#routes/-helpers/examples';
import { SelectField, Option } from '@admiral-ds/react-ui';

import * as React from 'react';
import type { ChangeEvent } from 'react';
import { SearchSelectFieldProps } from '@admiral-ds/react-ui';

const OPTIONS_CITIES = ['Москва', 'Санкт-Петербург', 'Ижевск', 'Тверь', 'Рязань'];

export const Field = ({
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
      <ExampleSection text='Компоненту можно прокидывать дата аттрибуты вида [data-container-...]. Этот аттрибут попадет только на контейнер самого компонента. Например: data-container-id="fieldIdOne" - контейнер компонента получит аттрибут data-container-id="fieldIdOne", на нативный input этот аттрибут прокинут не будет.'>
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
