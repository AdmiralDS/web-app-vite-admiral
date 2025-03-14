import { ExampleSection } from '#routes/-helpers/examples';
import { PhoneNumberInput } from '@admiral-ds/react-ui';
import { ChangeEvent, useState } from 'react';

export const PhoneNumberInputSelectedCountry = () => {
  const [localValue, setValue] = useState<string>('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.currentTarget.value;
    setValue(inputValue);
  };

  return (
    <>
      <ExampleSection>
        <PhoneNumberInput
          value={localValue}
          defaultCountry="AUT"
          style={{ maxWidth: '320px' }}
          onChange={handleChange}
        />
      </ExampleSection>
    </>
  );
};
