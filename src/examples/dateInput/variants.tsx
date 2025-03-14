import { ExampleSection } from '#routes/-helpers/examples';
import { DateInput } from '@admiral-ds/react-ui';
import { useState } from 'react';
import styled from 'styled-components';

const DateInputStyled = styled(DateInput)`
  max-width: 300px;
`;

export const DateInputVariants = () => {
  const [localValue, setValue] = useState('');
  const [localValue2, setValue2] = useState('');
  const [localValue3, setValue3] = useState('');

  return (
    <>
      <ExampleSection text="День">
        <DateInputStyled
          currentActiveView="DAY"
          value={localValue}
          onChange={(e) => setValue(e.currentTarget.value)}
          dropContainerClassName="dropContainerClass"
        />
      </ExampleSection>
      <ExampleSection text="Месяц">
        <DateInputStyled
          currentActiveView="MONTH"
          value={localValue2}
          onChange={(e) => setValue2(e.currentTarget.value)}
          dropContainerClassName="dropContainerClass"
        />
      </ExampleSection>
      <ExampleSection text="Год">
        <DateInputStyled
          currentActiveView="YEAR"
          value={localValue3}
          onChange={(e) => setValue3(e.currentTarget.value)}
          dropContainerClassName="dropContainerClass"
        />
      </ExampleSection>
    </>
  );
};
