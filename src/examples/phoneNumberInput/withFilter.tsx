import { ExampleSection } from '#examples/-helpers';
import { PhoneNumberInput } from '@admiral-ds/react-ui';
import { ChangeEvent, useState } from 'react';

export const PhoneNumberInputWithFilter = () => {
  const [localValue, setValue] = useState<string>('+7 123 456 78 90');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.currentTarget.value;
    setValue(inputValue);
  };

  return (
    <>
      <ExampleSection>
        <PhoneNumberInput
          value={localValue}
          onlyCountries={['RUS', 'BLR', 'TJK', 'UZB']}
          style={{ maxWidth: '320px' }}
          onChange={handleChange}
        />
      </ExampleSection>
    </>
  );
};
