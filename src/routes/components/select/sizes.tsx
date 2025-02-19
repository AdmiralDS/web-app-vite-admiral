import { createFileRoute } from '@tanstack/react-router';
import { ExampleSection } from '../../-helpers/examples';
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
  const [selectValueS, setSelectValueS] = React.useState<string>('');
  const onChangeS = (e: ChangeEvent<HTMLSelectElement>) => setSelectValueS(e.target.value);

  const [selectValueM, setSelectValueM] = React.useState<string>('');
  const onChangeM = (e: ChangeEvent<HTMLSelectElement>) => setSelectValueM(e.target.value);

  const [selectValueXL, setSelectValueXL] = React.useState<string>('');
  const onChangeXL = (e: ChangeEvent<HTMLSelectElement>) => setSelectValueXL(e.target.value);

  const renderOptions = () => {
    return options.map((option, ind) => (
      <Option key={option} value={option} disabled={ind === 3}>
        {option}
      </Option>
    ));
  };

  return (
    <>
      <ExampleSection text="Размер S">
        <Select
          {...props}
          id="props_id0"
          value={selectValueS}
          onChange={onChangeS}
          placeholder={placeholder}
          dropContainerClassName="dropContainerClass"
          dimension="s"
        >
          {renderOptions()}
        </Select>
      </ExampleSection>
      <ExampleSection text="Размер M">
        <Select
          {...props}
          id="props_id1"
          value={selectValueM}
          onChange={onChangeM}
          placeholder={placeholder}
          dropContainerClassName="dropContainerClass"
          dimension="m"
        >
          {renderOptions()}
        </Select>
      </ExampleSection>
      <ExampleSection text="Размер XL">
        <Select
          {...props}
          id="props_id2"
          value={selectValueXL}
          onChange={onChangeXL}
          placeholder={placeholder}
          dropContainerClassName="dropContainerClass"
          dimension="xl"
        >
          {renderOptions()}
        </Select>
      </ExampleSection>
    </>
  );
};

export const Route = createFileRoute('/components/select/sizes')({
  component: () => <Template />,
  staticData: {
    title: 'Select. Размеры',
    description:
      'Для изменения размера выпадающего списка используется свойство dimension. Компонент существует в 3 размерах: 32px (s), 40px (m) и 56px (xl)',
  },
});
