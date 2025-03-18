import { ExampleSection } from '#examples/-helpers';
import { PhoneNumberInput } from '@admiral-ds/react-ui';
import { ChangeEvent, useState } from 'react';

export const PhoneNumberInputWithPlaceholder = () => {
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
          onlyCountries={['RUS', 'BLR', 'TJK', 'UZB']}
          style={{ maxWidth: '320px' }}
          onChange={handleChange}
          placeholder="Номер телефона"
        />
      </ExampleSection>
    </>
  );
};
