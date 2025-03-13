import { createFileRoute } from '@tanstack/react-router';
import { ExampleSection } from '#routes/-helpers/examples';
import { Option, Select, Field, TextButton, MenuActionsPanel } from '@admiral-ds/react-ui';

import * as React from 'react';
import type { ChangeEvent } from 'react';
import type { SelectProps, FieldProps } from '@admiral-ds/react-ui';

const OPTIONS_CITIES = ['Москва', 'Санкт-Петербург', 'Ижевск', 'Тверь', 'Рязань'];

export const Template = ({
  placeholder = 'Города',
  label = 'Выберите города',
  options = OPTIONS_CITIES,
  restrictions = [2],
  ...props
}: SelectProps & FieldProps & { restrictions?: number[]; options?: string[] }) => {
  const [selectValues, setSelectValues] = React.useState<string[]>([]);
  const [, setSearchValue] = React.useState<string>('');
  const [optionsWithoutDisabled] = React.useState<string[]>([
    ...options.filter((_, ind) => !restrictions.includes(ind)),
  ]);

  const renderOptions = () => {
    return options.map((option, ind) => (
      <Option key={option} value={option} disabled={restrictions.includes(ind)}>
        {option}
      </Option>
    ));
  };

  const handleSelectedChange = (value: string | Array<string>) => {
    if (Array.isArray(value)) setSelectValues(value);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => setSearchValue(e.target.value);

  const handleChooseAll = () => {
    setSelectValues(optionsWithoutDisabled);
  };

  const menuPanelContentDimension = props.dimension === undefined || props.dimension === 'xl' ? 'l' : props.dimension;

  return (
    <>
      <ExampleSection text='Нижняя панель SearchSelect с кастомной кнопкой "Выбрать все". Выбираются только доступные чекбоксы (не disabled) и группируются сверху. Есть возможность удалить выделенные чекбоксы. После выбора всех доступных вариантов кнопка "Выбрать все" становится неактивна. Реализован поиск'>
        <Field {...props} label={label} id="propsId">
          <Select
            {...props}
            id="propsId"
            placeholder={placeholder}
            value={selectValues}
            onSelectedChange={handleSelectedChange}
            onInputChange={handleInputChange}
            dropContainerClassName="dropContainerClass"
            mode="searchSelect"
            multiple={true}
            moveSelectedOnTop={true}
            showCheckbox={true}
            displayClearIcon={true}
            renderBottomPanel={({ dimension = menuPanelContentDimension }) => {
              return (
                <MenuActionsPanel dimension={dimension}>
                  <TextButton
                    onClick={handleChooseAll}
                    dimension={'m'}
                    appearance={'primary'}
                    disabled={selectValues.length === optionsWithoutDisabled.length}
                    text="Выбрать все"
                  />
                </MenuActionsPanel>
              );
            }}
          >
            {renderOptions()}
          </Select>
        </Field>
      </ExampleSection>
    </>
  );
};

export const Route = createFileRoute('/components/select/multiSelectChooseAll')({
  component: () => <Template />,
  staticData: {
    title: 'SearchSelect multiple с кнопкой "Выбрать все"',
  },
});
