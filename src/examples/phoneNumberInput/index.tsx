import { ExampleSection } from '#examples/-helpers';
import { PhoneNumberInput } from '@admiral-ds/react-ui';
import { ChangeEvent, useState } from 'react';

export const PhoneNumberInputBasic = () => {
  const [localValue, setValue] = useState<string>('+7 123 456 78 90');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.currentTarget.value;
    setValue(inputValue);
  };

  return (
    <>
      <ExampleSection text="По дефолту стоят флаг России и маска для российского телефона, но задать можно любой другой.">
        <PhoneNumberInput
          defaultCountry="RUS"
          value={localValue}
          style={{ maxWidth: '320px' }}
          onChange={handleChange}
          dropContainerClassName="dropContainerClass"
        />
      </ExampleSection>
    </>
  );
};
