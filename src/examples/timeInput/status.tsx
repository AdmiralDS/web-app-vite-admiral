import { ExampleSection } from '#examples/-helpers';
import { TimeInput, Field } from '@admiral-ds/react-ui';
import { useState } from 'react';
import styled from 'styled-components';

const TimeInputStyled = styled(TimeInput)`
  max-width: 300px;
`;

export const TimeInputStatus = () => {
  const [localValue, setValue] = useState('12:00');
  const [localValue2, setValue2] = useState('12:00');

  return (
    <>
      <ExampleSection text="Статус error">
        <Field label="Введите время" extraText="Additional text" status="error">
          <TimeInputStyled
            status="error"
            value={localValue2}
            onChange={(e) => setValue2(e.currentTarget.value)}
            dropContainerClassName="dropContainerClass2"
          />
        </Field>
      </ExampleSection>
      <ExampleSection text="Статус success">
        <Field label="Введите время" extraText="Additional text" status="success">
          <TimeInputStyled
            status="success"
            value={localValue}
            onChange={(e) => setValue(e.currentTarget.value)}
            dropContainerClassName="dropContainerClass"
          />
        </Field>
      </ExampleSection>
    </>
  );
};
