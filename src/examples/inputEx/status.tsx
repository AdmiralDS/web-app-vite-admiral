import { createFileRoute } from '@tanstack/react-router';
import { ExampleSection } from '#routes/-helpers/examples';
import { InputEx } from '@admiral-ds/react-ui';
import { useState } from 'react';

const widthCssMixin = {
  width: '400px',
};

export const Template = () => {
  const [localValue, setValue] = useState('');
  const [localValue2, setValue2] = useState('');

  return (
    <>
      <ExampleSection text="Статус Success">
        <InputEx
          status="success"
          value={localValue}
          onChange={(e) => setValue(e.currentTarget.value)}
          prefixValue="Prefix"
          placeholder="Placeholder"
          style={widthCssMixin}
        />
      </ExampleSection>
      <ExampleSection text="Статус Error">
        <InputEx
          status="error"
          value={localValue2}
          onChange={(e) => setValue2(e.currentTarget.value)}
          suffixValue="Suffix"
          placeholder="Placeholder"
          style={widthCssMixin}
        />
      </ExampleSection>
    </>
  );
};

export const Route = createFileRoute('/components/inputEx/status')({
  component: () => <Template />,
  staticData: {
    title: 'InputEx. Статусы',
  },
});
