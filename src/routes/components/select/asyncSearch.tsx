import { createFileRoute } from '@tanstack/react-router';
import { ExampleSection } from '../../-helpers/examples';
import { Option, Select, useDebounce } from '@admiral-ds/react-ui';
import type { SelectProps } from '@admiral-ds/react-ui';
import React from 'react';
import { useQuery } from '@tanstack/react-query';

type PersonProps = {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: Array<string>;
  species: Array<string>;
  vehicles: Array<string>;
  starships: Array<string>;
  created: string;
  edited: string;
  url: string;
};

type PeopleResponseProps = {
  count: number;
  next: string | null;
  previous: string | null;
  results: Array<PersonProps>;
};

export const Template = (props: SelectProps) => {
  const [selectValue, setSelectValue] = React.useState(props.value ? String(props.value) : '');
  const [options, setOptions] = React.useState<Array<{ value: string; text: string }>>([]);
  const [filter, setFilter] = React.useState('');

  async function searchPeopleByName(name: string) {
    const response = await fetch(
      'https://swapi.dev/api/people/?' +
        String(
          new URLSearchParams({
            search: name,
          }),
        ),
    );
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json() as Promise<PeopleResponseProps>;
  }

  const debouncedFilter = useDebounce(filter, 500);

  const { data, isLoading } = useQuery({
    queryKey: ['people', debouncedFilter],
    queryFn: (): Promise<PeopleResponseProps> => searchPeopleByName(debouncedFilter),
  });

  React.useEffect(() => {
    if (data) {
      const names = data['results'] as Array<{ name: string }>;
      const options = names.map(({ name }) => ({ value: name, text: name }));
      setOptions(options);
    }
  }, [data]);

  const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectValue(e.target.value);
    props.onChange?.(e);
  };

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value);
  };

  return (
    <ExampleSection text="Кэшированная ассинхронная подгрузка опций при поиске. Нужно дополнительно обернуть App в QueryClientProvider">
      <Select
        {...props}
        value={selectValue}
        isLoading={isLoading}
        onChange={onChange}
        onInputChange={onInputChange}
        mode="searchSelect"
      >
        {options.map((option) => (
          <Option key={option.value} value={option.value}>
            {option.text}
          </Option>
        ))}
      </Select>
    </ExampleSection>
  );
};

export const Route = createFileRoute('/components/select/asyncSearch')({
  component: () => <Template />,
  staticData: {
    title: 'mode = "searchSelect". Асинхронный поиск',
  },
});
