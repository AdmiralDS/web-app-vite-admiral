import * as React from 'react';
import { Option, Select } from '@admiral-ds/react-ui';
import type { SelectProps } from '@admiral-ds/react-ui';
import { ExampleSection } from '#routes/-helpers/examples';

const OPTIONS = [
  {
    value: 'val1',
    text: 'Текст 1',
    extraText: 'Доооп Текст 1',
  },
  {
    value: 'val12',
    text: 'Текст 12',
    extraText: 'Доооп Текст 12',
  },
  {
    value: 'val2',
    text: 'Текст 2',
    extraText: 'Доп Теttкст 2',
  },
  {
    value: 'val3',
    text: 'Текст 3',
    disabled: true,
    extraText: 'дддопТекст 3',
  },
  {
    value: 'val4',
    text: 'Текст 444',
    extraText: 'Доооп Тексттт 41232',
  },
] as Array<{ value: string; text: string; disabled?: boolean; extraText?: string }>;

export const SelectExternalFilter = (props: SelectProps) => {
  const [singleSelectValue, setSingleSelectValue] = React.useState<string>('');
  const [singleSearchValue, setSingleSearchValue] = React.useState('');
  const [multipleSelectValue, setMultipleSelectValue] = React.useState<Array<string>>([]);
  const [multipleSearchValue, setMultipleSearchValue] = React.useState('');

  const handleSingleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSingleSearchValue(event.target.value);
  };

  const handleSingleSelectedChange = (value: string | Array<string>) => {
    if (typeof value === 'string') setSingleSelectValue(value);
  };

  const handleMultipleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMultipleSearchValue(event.target.value);
  };

  const handleMultipleSelectedChange = (value: string | Array<string>) => {
    if (Array.isArray(value)) setMultipleSelectValue(value);
  };

  const renderSingleOptions = (value: string) => {
    const toSearch = value.trim().toLowerCase();

    const filteredOptions = OPTIONS.filter((option) => option.text.toLowerCase().includes(toSearch));

    return filteredOptions.map((option) => (
      <Option key={`${toSearch}/${option.value}`} value={option.text} disabled={option.disabled}>
        {option.text}
      </Option>
    ));
  };

  const renderMultipleOptions = (value: string) => {
    const toSearch = value.trim().toLowerCase();

    const filteredOptions = OPTIONS.filter(
      (option) => option.text.toLowerCase().includes(toSearch) || multipleSelectValue.includes(option.text),
    );

    return filteredOptions.map((option) => (
      <Option key={option.value} value={option.text} disabled={option.disabled}>
        {option.text}
      </Option>
    ));
  };

  return (
    <>
      <ExampleSection text="Пример внешней фильтрации элементов по значению с одиночным выбором">
        <Select
          {...props}
          mode="searchSelect"
          value={singleSelectValue}
          onSelectedChange={handleSingleSelectedChange}
          inputValue={singleSearchValue}
          onInputChange={handleSingleInputChange}
          placeholder="пока ни чего не выбрано"
          onFilterItem={() => true}
        >
          {renderSingleOptions(singleSearchValue)}
        </Select>
      </ExampleSection>
      <ExampleSection text="Пример внешней фильтрации элементов по значению с множественным выбором">
        <Select
          {...props}
          mode="searchSelect"
          multiple
          value={multipleSelectValue}
          onSelectedChange={handleMultipleSelectedChange}
          inputValue={multipleSearchValue}
          onInputChange={handleMultipleInputChange}
          placeholder="пока ни чего не выбрано"
          onFilterItem={() => true}
        >
          {renderMultipleOptions(multipleSearchValue)}
        </Select>
      </ExampleSection>
    </>
  );
};
