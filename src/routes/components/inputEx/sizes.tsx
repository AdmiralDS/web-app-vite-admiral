import { createFileRoute } from '@tanstack/react-router';
import { ExampleSection } from '../../-helpers/examples';
import { InputEx } from '@admiral-ds/react-ui';
import { useState } from 'react';

const widthCssMixin = {
  width: '400px',
};

export const Template = () => {
  const [localValue, setValue] = useState('');
  const [localValue2, setValue2] = useState('');
  const [localValue3, setValue3] = useState('');

  return (
    <>
      <ExampleSection text="Размер s">
        <InputEx
          dimension="s"
          value={localValue}
          onChange={(e) => setValue(e.currentTarget.value)}
          prefixValue="Prefix"
          suffixValue="Suffix"
          placeholder="Placeholder"
          style={widthCssMixin}
        />
      </ExampleSection>
      <ExampleSection text="Размер m">
        <InputEx
          dimension="m"
          value={localValue2}
          onChange={(e) => setValue2(e.currentTarget.value)}
          suffixValue="Suffix"
          prefixValue="Prefix"
          placeholder="Placeholder"
          style={widthCssMixin}
        />
      </ExampleSection>
      <ExampleSection text="Размер xl">
        <InputEx
          dimension="xl"
          value={localValue3}
          onChange={(e) => setValue3(e.currentTarget.value)}
          prefixValue="Prefix"
          suffixValue="Suffix"
          placeholder="Placeholder"
          style={widthCssMixin}
        />
      </ExampleSection>
    </>
  );
};

export const Route = createFileRoute('/components/inputEx/sizes')({
  component: () => <Template />,
  staticData: {
    title: 'InputEx. Размеры',
    description: 'Компонент существует в 3 размерах s, m, xl',
  },
});
