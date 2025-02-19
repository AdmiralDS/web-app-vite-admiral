import { createFileRoute } from '@tanstack/react-router';
import { ExampleSection } from '../../-helpers/examples';
import { Option, Select, Field } from '@admiral-ds/react-ui';
import type { SelectProps } from '@admiral-ds/react-ui';
import React, { ChangeEvent } from 'react';

const OPTIONS_CITIES = ['Москва', 'Санкт-Петербург', 'Ижевск', 'Тверь', 'Рязань'];

export const Template = ({
  placeholder = 'Город',
  options = OPTIONS_CITIES,
  ...props
}: SelectProps & { options?: string[] }) => {
  const [selectValueExample1, setSelectValueExample1] = React.useState<string>('');
  const onChange1 = (e: ChangeEvent<HTMLSelectElement>) => setSelectValueExample1(e.target.value);

  const [selectValueExample2, setSelectValueExample2] = React.useState<string>('');
  const onChange2 = (e: ChangeEvent<HTMLSelectElement>) => setSelectValueExample2(e.target.value);

  const [selectValueExample3, setSelectValueExample3] = React.useState<string>('');
  const onChange3 = (e: ChangeEvent<HTMLSelectElement>) => setSelectValueExample3(e.target.value);

  const [selectValueExample4, setSelectValueExample4] = React.useState<string>('');
  const onChange4 = (e: ChangeEvent<HTMLSelectElement>) => setSelectValueExample4(e.target.value);

  const [selectValueExample5, setSelectValueExample5] = React.useState<string>('');
  const onChange5 = (e: ChangeEvent<HTMLSelectElement>) => setSelectValueExample5(e.target.value);

  const renderOptions = () => {
    return options.map((option, ind) => (
      <Option key={ind} value={option} disabled={ind === 2}>
        {option}
      </Option>
    ));
  };

  return (
    <>
      <ExampleSection text="Блокировка выбора опции Select свойством disabled">
        <Select
          {...props}
          id="props_id1"
          placeholder={placeholder}
          value={selectValueExample1}
          onChange={onChange1}
          dropContainerClassName="dropContainerClass"
        >
          {renderOptions()}
        </Select>
      </ExampleSection>
      <ExampleSection text="Блокировка редактирования Select свойством readOnly">
        <Field label="Вашей категории сотрудников не доступен выбор города для командировки" id="props_id3">
          <Select
            {...props}
            id="props_id2"
            placeholder={placeholder}
            value={selectValueExample2}
            onChange={onChange2}
            dropContainerClassName="dropContainerClass"
            readOnly={true}
          >
            {renderOptions()}
          </Select>
        </Field>
      </ExampleSection>
      <ExampleSection text="Загрузка опций Select свойством isLoading">
        <Select
          {...props}
          id="props_id3"
          placeholder={placeholder}
          value={selectValueExample3}
          onChange={onChange3}
          dropContainerClassName="dropContainerClass"
          isLoading={true}
        >
          {renderOptions()}
        </Select>
      </ExampleSection>
      <ExampleSection text="Рендеринг Select свойством skeleton">
        <Select
          {...props}
          id="props_id4"
          placeholder={placeholder}
          value={selectValueExample4}
          onChange={onChange4}
          dropContainerClassName="dropContainerClass"
          skeleton={true}
        >
          {renderOptions()}
        </Select>
      </ExampleSection>
      <ExampleSection text="Отображение кнопки очистки Select свойством displayClearIcon">
        <Select
          {...props}
          id="props_id5"
          placeholder={placeholder}
          value={selectValueExample5}
          onChange={onChange5}
          dropContainerClassName="dropContainerClass"
          displayClearIcon={true}
        >
          {renderOptions()}
        </Select>
      </ExampleSection>
    </>
  );
};

export const Route = createFileRoute('/components/select/state')({
  component: () => <Template />,
  staticData: {
    title: 'Select. Состояния',
  },
});
