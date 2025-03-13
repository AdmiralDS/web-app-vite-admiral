import { createFileRoute } from '@tanstack/react-router';
import { ExampleSection } from '#routes/-helpers/examples';
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
  const [singleSelectValue, setSingleSelectValue] = React.useState<string>('');
  const [singleSearchValue, setSingleSearchValue] = React.useState<string>('');

  const [multiSelectValue, setMultiSelectValue] = React.useState<string[]>([]);
  const [multiSearchValue, setMultiSearchValue] = React.useState<string>('');

  const [options, setOptions] = React.useState(OPTIONS_CITIES);

  const onSingleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSingleSelectValue(e.target.value);
    props.onChange?.(e);
  };

  const renderSingleOptions = () => {
    return options.map((option, ind) => (
      <Option key={option} value={option} disabled={ind === 2}>
        {option}
      </Option>
    ));
  };

  const renderMultiOptions = React.useMemo(() => {
    return options.map((option, ind) => (
      <Option key={option} value={option} disabled={[2, 4].includes(ind)}>
        {option}
      </Option>
    ));
  }, [options]);

  const handleSingleInputChange = (e: ChangeEvent<HTMLInputElement>) => setSingleSearchValue(e.target.value);

  const handleMultiSelectedChange = (value: string | Array<string>) => {
    if (Array.isArray(value)) setMultiSelectValue(value);
  };

  const handleMultiInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMultiSearchValue(e.target.value);
  };

  const handleSingleAddButtonClick = () => {
    if (singleSearchValue && !options.includes(singleSearchValue)) {
      setOptions([...options, singleSearchValue]);
    }
  };

  const handleMultiAddButtonClick = () => {
    if (multiSearchValue && !options.find((item) => item === multiSearchValue)) {
      setOptions([...options, multiSearchValue]);
      setMultiSelectValue([...multiSelectValue, multiSearchValue]);
      setMultiSearchValue('');
    }
  };

  const singleAddButtonProps = React.useMemo(() => {
    return {
      disabled: options.includes(singleSearchValue) || !singleSearchValue,
      text: singleSearchValue ? `Добавить «${singleSearchValue}»` : 'Добавить',
    };
  }, [singleSearchValue, options]);

  const multiAddButtonProps = React.useMemo(() => {
    return {
      disabled: !!options.find((item) => item === multiSearchValue) || !multiSearchValue,
      text: multiSearchValue ? `Добавить «${multiSearchValue}»` : 'Добавить',
    };
  }, [multiSearchValue, options]);

  const menuPanelContentDimension = props.dimension === undefined || props.dimension === 'xl' ? 'l' : props.dimension;

  return (
    <>
      <ExampleSection text='Нижняя панель SearchSelect с кастомной кнопкой "Добавить". После добавления опции в выборку кнопка "Добавить" становится неактивна'>
        <Select
          {...props}
          id="propsId1"
          placeholder={placeholder}
          value={singleSelectValue}
          onChange={onSingleChange}
          onInputChange={handleSingleInputChange}
          dropContainerClassName="dropContainerClass"
          mode="searchSelect"
          data-menu-id="test-menu"
          renderBottomPanel={({ dimension = menuPanelContentDimension }) => {
            return (
              <MenuActionsPanel dimension={dimension}>
                <TextButton
                  {...singleAddButtonProps}
                  iconStart={<PlusOutline />}
                  onClick={handleSingleAddButtonClick}
                />
              </MenuActionsPanel>
            );
          }}
        >
          {renderSingleOptions()}
        </Select>
      </ExampleSection>
      <ExampleSection text="Пример для множественного SearchSelect">
        <Select
          {...props}
          id="propsId2"
          placeholder={placeholder}
          multiple={true}
          value={multiSelectValue}
          inputValue={multiSearchValue}
          onSelectedChange={handleMultiSelectedChange}
          onInputChange={handleMultiInputChange}
          dropContainerClassName="dropContainerClass"
          dimension="xl"
          displayClearIcon={true}
          mode="searchSelect"
          data-menu-id="test-menu2"
          renderBottomPanel={({ dimension = menuPanelContentDimension }) => {
            return (
              <MenuActionsPanel dimension={dimension}>
                <TextButton {...multiAddButtonProps} iconStart={<PlusOutline />} onClick={handleMultiAddButtonClick} />
              </MenuActionsPanel>
            );
          }}
        >
          {renderMultiOptions}
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
