import { ExampleSection } from '#examples/-helpers';
import { TimeInput } from '@admiral-ds/react-ui';
import { useState } from 'react';
import styled from 'styled-components';

const TimeInputStyled = styled(TimeInput)`
  max-width: 300px;
`;

export const TimeInputSizes = () => {
  const [localValue, setValue] = useState('');
  const [localValue2, setValue2] = useState('');
  const [localValue3, setValue3] = useState('');

  return (
    <>
      <ExampleSection text="Размер S">
        <TimeInputStyled
          dimension="s"
          value={localValue}
          onChange={(e) => setValue(e.currentTarget.value)}
          dropContainerClassName="dropContainerClass"
        />
      </ExampleSection>
      <ExampleSection text="Размер M">
        <TimeInputStyled
          dimension="m"
          value={localValue2}
          onChange={(e) => setValue2(e.currentTarget.value)}
          dropContainerClassName="dropContainerClass"
        />
      </ExampleSection>
      <ExampleSection text="Размер XL">
        <TimeInputStyled
          dimension="xl"
          value={localValue3}
          onChange={(e) => setValue3(e.currentTarget.value)}
          dropContainerClassName="dropContainerClass"
        />
      </ExampleSection>
    </>
  );
};
