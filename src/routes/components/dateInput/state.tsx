import { createFileRoute } from '@tanstack/react-router';
import { ExampleSection } from '../../-helpers/examples';
import { DateInput } from '@admiral-ds/react-ui';
import { useState } from 'react';
import styled from 'styled-components';

const DateInputStyled = styled(DateInput)`
  max-width: 300px;
`;

export const Template = () => {
  const [localValue, setValue] = useState('');

  const nowDate = new Date();
  const valueNowDate = `${nowDate.getDate()}.${nowDate.getMonth() + 1}.${nowDate.getFullYear()}`;

  return (
    <>
      <ExampleSection text="disabled">
        <DateInputStyled
          disabled
          value={valueNowDate}
          placeholder="Some placeholder"
          dropContainerClassName="dropContainerClass"
        />
      </ExampleSection>
      <ExampleSection text="readOnly">
        <DateInputStyled
          readOnly
          value={valueNowDate}
          placeholder="Some placeholder"
          dropContainerClassName="dropContainerClass"
        />
      </ExampleSection>
      <ExampleSection text="isLoading">
        <DateInputStyled
          isLoading
          value={valueNowDate}
          placeholder="Some placeholder"
          dropContainerClassName="dropContainerClass"
        />
      </ExampleSection>
      <ExampleSection text="displayClearIcon - отображение иконки очистки поля">
        <DateInputStyled
          displayClearIcon
          value={localValue}
          onChange={(e) => setValue(e.currentTarget.value)}
          placeholder="Some placeholder"
          dropContainerClassName="dropContainerClass"
        />
      </ExampleSection>
      <ExampleSection text="skeleton">
        <DateInputStyled
          skeleton
          value={valueNowDate}
          placeholder="Some placeholder"
          dropContainerClassName="dropContainerClass"
        />
      </ExampleSection>
      <ExampleSection text="disableCopying - отключает возможность выделения и копирования значения поля">
        <DateInputStyled
          disableCopying
          value={valueNowDate}
          placeholder="Some placeholder"
          dropContainerClassName="dropContainerClass"
        />
      </ExampleSection>
    </>
  );
};

export const Route = createFileRoute('/components/dateInput/state')({
  component: () => <Template />,
  staticData: {
    title: 'DateInput. Состояния',
  },
});
