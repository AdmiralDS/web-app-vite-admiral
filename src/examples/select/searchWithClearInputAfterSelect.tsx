import * as React from 'react';
import { Option, Select, T } from '@admiral-ds/react-ui';
import type { SelectProps } from '@admiral-ds/react-ui';
import { ExampleSection } from '#examples/-helpers';

import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 36px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 24px;
  flex: 1 0 50%;
  justify-content: space-between;
`;

const OPTIONS_CITIES = ['Москва', 'Санкт-Петербург', 'Ижевск', 'Тверь', 'Рязань'];

export const SelectSearchWithClearInputAfterSelect = ({
  placeholder = 'Города',
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
    <Container>
      <Wrapper>
        <T font={'Body/Body 2 Short'}>Введенное значение удаляется после выбора элемента (по умолчанию)</T>
        <ExampleSection>
          <Select
            {...props}
            placeholder={placeholder}
            onChange={handleChange}
            multiple={true}
            dimension="xl"
            displayClearIcon={true}
            mode="searchSelect"
          >
            {renderOptions()}
          </Select>
        </ExampleSection>
      </Wrapper>
      <Wrapper>
        <T font={'Body/Body 2 Short'}>Без очистки введенного значения</T>
        <ExampleSection>
          <Select
            {...props}
            placeholder={placeholder}
            onChange={handleChange}
            multiple={true}
            dimension="xl"
            displayClearIcon={true}
            mode="searchSelect"
            clearInputValueAfterSelect={false}
          >
            {renderOptions()}
          </Select>
        </ExampleSection>
      </Wrapper>
    </Container>
  );
};
