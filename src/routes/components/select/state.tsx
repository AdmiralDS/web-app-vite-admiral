import styled from 'styled-components';
import { createFileRoute } from '@tanstack/react-router';
import { ExampleSection } from '../../-helpers/examples';
import { Option, Select, Field, T } from '@admiral-ds/react-ui';
import type { SelectProps } from '@admiral-ds/react-ui';
import React, { ChangeEvent } from 'react';
import { OPTIONS_CITIES } from '.';

export const Separator = styled.div<{ $height?: number }>`
  height: ${(p) => p.$height || 24}px;
`;

const renderOptions = () => {
  return OPTIONS_CITIES.map((option, ind) => (
    <Option key={ind} value={option} disabled={ind === 2}>
      {option}
    </Option>
  ));
};

const renderOverflowingOptions = () => {
  return [
    ...OPTIONS_CITIES,
    'Гигантский текст, который настолько большой, что, когда он проходил мимо телевизора, ты пропустил 2 серии любимого сериала',
  ].map((option, ind) => (
    <Option key={ind} value={option} disabled={ind === 2}>
      {option}
    </Option>
  ));
};

export const Template = ({ placeholder = 'Город', ...props }: SelectProps) => {
  const [selectValueExample1, setSelectValueExample1] = React.useState<string>('');
  const onChange1 = (e: ChangeEvent<HTMLSelectElement>) => setSelectValueExample1(e.target.value);

  const [selectValueExample2, setSelectValueExample2] = React.useState<string>('');
  const onChange2 = (e: ChangeEvent<HTMLSelectElement>) => setSelectValueExample2(e.target.value);

  const [selectValueExample3, setSelectValueExample3] = React.useState<string>('');
  const onChange3 = (e: ChangeEvent<HTMLSelectElement>) => setSelectValueExample3(e.target.value);

  const [selectValueExample4, setSelectValueExample4] = React.useState<string[]>([]);
  const handleSelectedChange4 = (value: string | Array<string>) => {
    if (Array.isArray(value)) setSelectValueExample4(value);
  };

  return (
    <>
      <ExampleSection text="Для изменения размера выпадающего списка используется свойство dimension, а для ограничения доступа к опции берут disabled">
        <Field label='dimension="xl"' id="props_id0">
          <Select
            {...props}
            id="props_id0"
            placeholder={placeholder}
            value={selectValueExample1}
            onChange={onChange1}
            dropContainerClassName="dropContainerClass"
            dimension="xl"
          >
            {renderOptions()}
          </Select>
        </Field>

        <Separator />

        <Field label='dimension="m"' id="props_id1">
          <Select
            {...props}
            id="props_id1"
            placeholder={placeholder}
            value={selectValueExample1}
            onChange={onChange1}
            dropContainerClassName="dropContainerClass"
            dimension="m"
          >
            {renderOptions()}
          </Select>
        </Field>

        <Separator />

        <Field label='dimension="s"' id="props_id2">
          <Select
            {...props}
            id="props_id2"
            placeholder={placeholder}
            value={selectValueExample1}
            onChange={onChange1}
            dropContainerClassName="dropContainerClass"
            dimension="s"
          >
            {renderOptions()}
          </Select>
        </Field>
      </ExampleSection>
      <ExampleSection text="Блокировка редактирования Select свойством readOnly">
        <Field label="Вашей категории сотрудников не доступен выбор города для командировки" id="props_id3">
          <Select
            {...props}
            id="props_id3"
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
      <ExampleSection text="Отображается Title, tooltip скрыт">
        <T font="Body/Body 2 Long" as="div">
          Для того чтобы скрыть tooltip, отображаемый при переполнении, необходимо установить свойство{' '}
          <code>forceHideOverflowTooltip</code> в значение <code>true</code>.<Separator $height={8} />
          Title отображается стандартными средствами браузера, поэтому не кастомизируется.
        </T>
        <Separator />
        <Select
          {...props}
          placeholder={placeholder}
          value={selectValueExample3}
          onChange={onChange3}
          dropContainerClassName="dropContainerClass"
          forceHideOverflowTooltip
        >
          {renderOverflowingOptions()}
        </Select>
      </ExampleSection>
      <ExampleSection text="Также можно комбинировать свойства. При необходимости создания селекта множественного выбора (multiple) с чекбоксами на элементах (showCheckbox), кнопкой удаления (displayClearIcon) и поднятием наверх выбранных опций (moveSelectedOnTop) воспользуемся примером:">
        <Field label="Выберите предпочтительные для командировки города" id="props_id4">
          <Select
            {...props}
            id="props_id4"
            placeholder={`${placeholder}а`}
            value={selectValueExample4}
            onSelectedChange={handleSelectedChange4}
            dropContainerClassName="dropContainerClass"
            multiple={true}
            moveSelectedOnTop={true}
            showCheckbox={true}
            displayClearIcon={true}
            forceHideOverflowTooltip
          >
            {renderOptions()}
          </Select>
        </Field>
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
