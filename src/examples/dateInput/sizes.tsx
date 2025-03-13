import { createFileRoute } from '@tanstack/react-router';
import { ExampleSection } from '#routes/-helpers/examples';
import { DateInput } from '@admiral-ds/react-ui';
import { useState } from 'react';
import styled from 'styled-components';

const DateInputStyled = styled(DateInput)`
  max-width: 300px;
`;

export const Template = () => {
  const [localValue, setValue] = useState('');
  const [localValue2, setValue2] = useState('');
  const [localValue3, setValue3] = useState('');

  return (
    <>
      <ExampleSection text="Размер S">
        <DateInputStyled
          dimension="s"
          value={localValue}
          onChange={(e) => setValue(e.currentTarget.value)}
          placeholder="Some placeholder"
          dropContainerClassName="dropContainerClass"
        />
      </ExampleSection>
      <ExampleSection text="Размер M">
        <DateInputStyled
          dimension="m"
          value={localValue2}
          onChange={(e) => setValue2(e.currentTarget.value)}
          placeholder="Some placeholder"
          dropContainerClassName="dropContainerClass"
        />
      </ExampleSection>
      <ExampleSection text="Размер XL">
        <DateInputStyled
          dimension="xl"
          value={localValue3}
          onChange={(e) => setValue3(e.currentTarget.value)}
          placeholder="Some placeholder"
          dropContainerClassName="dropContainerClass"
        />
      </ExampleSection>
    </>
  );
};

export const Route = createFileRoute('/components/dateInput/sizes')({
  component: () => <Template />,
  staticData: {
    title: 'DateInput. Размеры',
    description: 'Компонент существует в 3 размерах 32px (s), 40px (m) и 56px (xl)',
  },
});
