import { ExampleSection } from '#routes/-helpers/examples';
import { DateField } from '@admiral-ds/react-ui';
import { useState } from 'react';
import styled from 'styled-components';

const DateFieldStyled = styled(DateField)`
  max-width: 300px;
`;

export const DateFieldState = () => {
  const [localValue, setValue] = useState('');
  const [localValue2, setValue2] = useState('');

  return (
    <>
      <ExampleSection text="required">
        <DateFieldStyled
          required
          data-container-id="dateFieldIdTwo"
          value={localValue}
          onChange={(e) => setValue(e.currentTarget.value)}
          id={'date 1'}
          placeholder="placeholder"
          dropContainerClassName="dropContainerClass"
          label="label"
        />
      </ExampleSection>
      <ExampleSection text="displayInline">
        <DateFieldStyled
          displayInline
          data-container-id="dateFieldIdOne"
          value={localValue2}
          onChange={(e) => setValue2(e.currentTarget.value)}
          id={'date 1'}
          placeholder="placeholder"
          dropContainerClassName="dropContainerClass"
          label="label"
        />
      </ExampleSection>
    </>
  );
};
