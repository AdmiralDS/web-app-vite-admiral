import { createFileRoute } from '@tanstack/react-router';
import { ExampleSection } from '../../-helpers/examples';
import { Option, Select, TextButton, MenuActionsPanel } from '@admiral-ds/react-ui';
import PlusOutline from '@admiral-ds/icons/build/service/PlusOutline.svg?react';

import * as React from 'react';
import type { ChangeEvent } from 'react';
import type { SelectProps } from '@admiral-ds/react-ui';

const OPTIONS_CITIES = [
  'Москва',
  'Санкт-Петербург',
  'Ижевск',
  'Тверь',
  'Рязань',
  'Нижний Новгород',
  'Казань',
  'Сургут',
];

export const Template = ({ placeholder = 'Города', ...props }: SelectProps) => {
  const [selectValue, setSelectValue] = React.useState<string>('');
  const [searchValue, setSearchValue] = React.useState<string>('');
  const [options, setOptions] = React.useState(OPTIONS_CITIES);

  const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectValue(e.target.value);
    props.onChange?.(e);
  };

  const renderOptions = () => {
    return options.map((option, ind) => (
      <Option key={option} value={option} disabled={ind === 2}>
        {option}
      </Option>
    ));
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => setSearchValue(e.target.value);

  const handleAddButtonClick = () => {
    if (searchValue && !options.includes(searchValue)) {
      setOptions([...options, searchValue]);
    }
  };

  const addButtonProps = React.useMemo(() => {
    return {
      disabled: options.includes(searchValue) || !searchValue,
      text: searchValue ? `Добавить «${searchValue}»` : 'Добавить',
    };
  }, [searchValue, options]);

  const menuPanelContentDimension = props.dimension === undefined || props.dimension === 'xl' ? 'l' : props.dimension;

  return (
    <>
      <ExampleSection text='Нижняя панель SearchSelect с кастомной кнопкой "Добавить". После добавления опции в выборку кнопка "Добавить" становится неактивна'>
        <Select
          {...props}
          id="propsId"
          placeholder={placeholder}
          value={selectValue}
          onChange={onChange}
          onInputChange={handleInputChange}
          dropContainerClassName="dropContainerClass"
          mode="searchSelect"
          data-menu-id="test-menu"
          renderBottomPanel={({ dimension = menuPanelContentDimension }) => {
            return (
              <MenuActionsPanel dimension={dimension}>
                <TextButton {...addButtonProps} iconStart={<PlusOutline />} onClick={handleAddButtonClick} />
              </MenuActionsPanel>
            );
          }}
        >
          {renderOptions()}
        </Select>
      </ExampleSection>
    </>
  );
};

export const Route = createFileRoute('/components/select/panelWithAddButton')({
  component: () => <Template />,
  staticData: {
    title: 'Нижняя панель с кнопкой "Добавить"',
  },
});
