import { useState } from 'react';
import type { ChangeEvent } from 'react';

import { EditMode } from '@admiral-ds/react-ui';
import { ExampleSection } from '#routes/-helpers/examples';
import type { EditModeProps } from '@admiral-ds/react-ui';

const Component = ({ dimension, bold }: { dimension: EditModeProps['dimension']; bold?: EditModeProps['bold'] }) => {
  const value = 'Привет!';
  const placeholder = 'Placeholder';
  const [localValue, setValue] = useState<string>(String(value) ?? '');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.currentTarget.value;
    setValue(inputValue);
  };

  return (
    <EditMode value={localValue} onChange={handleChange} placeholder={placeholder} dimension={dimension} bold={bold} />
  );
};

export const EditModeDimensions = () => {
  return (
    <>
      <ExampleSection text="Размер S">
        <Component dimension="s" />
        <Component dimension="s" bold />
      </ExampleSection>
      <ExampleSection text="Размер M">
        <Component dimension="m" />
        <Component dimension="m" bold />
      </ExampleSection>
      <ExampleSection text="Размер XL">
        <Component dimension="xl" />
      </ExampleSection>
      <ExampleSection text="Размер XXL">
        <Component dimension="xxl" />
      </ExampleSection>
    </>
  );
};
