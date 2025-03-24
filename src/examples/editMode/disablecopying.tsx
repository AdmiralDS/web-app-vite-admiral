import { useState } from 'react';
import type { ChangeEvent } from 'react';

import { EditMode } from '@admiral-ds/react-ui';
import { ExampleSection } from '#examples/-helpers';

const Example = () => {
  const value = 'Текст, недоступный для выделения и копирования';
  const placeholder = 'Placeholder';
  const [localValue, setValue] = useState<string>(String(value) ?? '');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.currentTarget.value;
    setValue(inputValue);
  };

  return <EditMode value={localValue} onChange={handleChange} placeholder={placeholder} disableCopying />;
};

export const EditModeDisableCopying = () => {
  return (
    <ExampleSection>
      <Example />
    </ExampleSection>
  );
};
