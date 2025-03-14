import { ExampleSection } from '#routes/-helpers/examples';
import { DateInput } from '@admiral-ds/react-ui';
import { useState } from 'react';
import styled from 'styled-components';

const DateInputStyled = styled(DateInput)`
  max-width: 300px;
`;

export const DateInputStatus = () => {
  const [localValue, setValue] = useState('');
  const [localValue2, setValue2] = useState('');

  return (
    <>
      <ExampleSection text="Статус success">
        <DateInputStyled
          status="success"
          value={localValue}
          onChange={(e) => setValue(e.currentTarget.value)}
          placeholder="Some placeholder"
          dropContainerClassName="dropContainerClass"
        />
      </ExampleSection>
      <ExampleSection text="Статус error">
        <DateInputStyled
          status="error"
          value={localValue2}
          onChange={(e) => setValue2(e.currentTarget.value)}
          placeholder="Some placeholder"
          dropContainerClassName="dropContainerClass2"
        />
      </ExampleSection>
    </>
  );
};
