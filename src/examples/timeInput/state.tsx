import { ExampleSection } from '#examples/-helpers';
import { TimeInput } from '@admiral-ds/react-ui';
import { useState } from 'react';
import styled from 'styled-components';

const TimeInputStyled = styled(TimeInput)`
  max-width: 300px;
`;

export const TimeInputState = () => {
  const [localValue, setValue] = useState('12:30');

  const nowTime = '12:30';
  const valueNowTime = '12:30';

  return (
    <>
      <ExampleSection text="displayClearIcon - отображение иконки очистки поля">
        <TimeInputStyled
          displayClearIcon
          value={localValue}
          onChange={(e) => setValue(e.currentTarget.value)}
          dropContainerClassName="dropContainerClass"
        />
      </ExampleSection>
      <ExampleSection text="Недоступные для выбора строки (Disabled lines)">
        <TimeInputStyled
          disabledSlots={['01:00', '01:30', '02:00', '02:30']}
          dropContainerClassName="dropContainerClass"
        />
      </ExampleSection>
      <ExampleSection text="disabled">
        <TimeInputStyled disabled dropContainerClassName="dropContainerClass" />
      </ExampleSection>
      <ExampleSection text="readOnly">
        <TimeInputStyled readOnly value={nowTime} dropContainerClassName="dropContainerClass" />
      </ExampleSection>
      <ExampleSection text="isLoading">
        <TimeInputStyled isLoading dropContainerClassName="dropContainerClass" />
      </ExampleSection>
      <ExampleSection text="skeleton">
        <TimeInputStyled skeleton dropContainerClassName="dropContainerClass" />
      </ExampleSection>
      <ExampleSection text="disableCopying - отключает возможность выделения и копирования значения поля">
        <TimeInputStyled disableCopying value={valueNowTime} dropContainerClassName="dropContainerClass" />
      </ExampleSection>
    </>
  );
};
