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

  return (
    <>
      <ExampleSection text="disabled">
        <InputEx disabled value="disabled" prefixValue="Prefix" suffixValue="Suffix" style={widthCssMixin} />
      </ExampleSection>
      <ExampleSection text="readOnly">
        <InputEx
          readOnly
          value="readOnly"
          onChange={(e) => setValue2(e.currentTarget.value)}
          prefixValue="Prefix"
          suffixValue="Suffix"
          style={widthCssMixin}
        />
      </ExampleSection>
      <ExampleSection text="skeleton">
        <InputEx
          skeleton
          value={localValue2}
          onChange={(e) => setValue2(e.currentTarget.value)}
          prefixValue="Prefix"
          suffixValue="Suffix"
          placeholder="Placeholder"
          style={widthCssMixin}
        />
      </ExampleSection>
      <ExampleSection text="disableCopying - отключает возможность выделения и копирования значения поля">
        <InputEx
          disableCopying
          value={localValue}
          onChange={(e) => setValue(e.currentTarget.value)}
          prefixValue="Prefix"
          suffixValue="Suffix"
          placeholder="Placeholder"
          style={widthCssMixin}
        />
      </ExampleSection>
      <ExampleSection text="displayClearIcon - отображает иконку очистки поля">
        <InputEx
          displayClearIcon
          value={localValue2}
          onChange={(e) => setValue2(e.currentTarget.value)}
          prefixValue="Prefix"
          suffixValue="Suffix"
          placeholder="Placeholder"
          style={widthCssMixin}
        />
      </ExampleSection>
    </>
  );
};

export const Route = createFileRoute('/components/inputEx/state')({
  component: () => <Template />,
  staticData: {
    title: 'InputEx. Состояния',
  },
});
