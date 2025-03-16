import * as React from 'react';
import { Option, Select, T, UnorderedList, ListItem } from '@admiral-ds/react-ui';
import { ExampleSection } from '#routes/-helpers/examples';
import type { SelectProps } from '@admiral-ds/react-ui';

const OPTIONS_CITIES = ['Москва', 'Санкт-Петербург', 'Ижевск', 'Тверь', 'Рязань'];

export const MultiSelectWithSelectedOnTop = ({
  placeholder = 'Города',
  moveSelectedOnTop = true,
  options = OPTIONS_CITIES,
  ...props
}: SelectProps & { options?: string[] }) => {
  const [, setSelectedValues] = React.useState<string[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValuesList = Array.from(e.target.selectedOptions).map((option) => option.value);
    setSelectedValues(selectedValuesList);
  };

  const renderOptions = () => {
    return options.map((option, ind) => (
      <Option key={option} value={option} disabled={ind === 2}>
        {option}
      </Option>
    ));
  };

  return (
    <>
      <T font="Body/Body 2 Long" as="div">
        Для вывода ранее выбранных пунктов сверху списка необходимо включить свойство <code>moveSelectedOnTop</code>
      </T>
      <UnorderedList>
        <ListItem>
          <T font="Body/Body 2 Long">Непосредственно при выборе (или отмене выбора) перестроение не происходит</T>
        </ListItem>
        <ListItem>
          <T font="Body/Body 2 Long">Выбранные строки отображаются сверху списка при повторном открытии меню</T>
        </ListItem>
        <ListItem>
          <T font="Body/Body 2 Long">
            Выбранные строки сортируются в том же порядке, что и чипсы в поле ввода, то есть в порядке очередности
            выбора
          </T>
        </ListItem>
      </UnorderedList>
      <ExampleSection>
        <Select
          {...props}
          placeholder={placeholder}
          multiple
          moveSelectedOnTop={moveSelectedOnTop}
          onChange={handleChange}
          mode="searchSelect"
          dropContainerClassName="dropContainerClass"
        >
          {renderOptions()}
        </Select>
      </ExampleSection>
    </>
  );
};
