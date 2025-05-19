import { ChangeEvent, useState } from 'react';
import { TextInput } from '@admiral-ds/react-ui';
import { ExampleSection } from '#examples/-helpers';

export const TextInputControlled = () => {
  const [localValue, setValue] = useState<string>('Default value');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setValue(inputValue);
  };

  return (
    <>
      <ExampleSection>
        <TextInput value={localValue} onChange={handleChange} />
      </ExampleSection>
    </>
  );
};
