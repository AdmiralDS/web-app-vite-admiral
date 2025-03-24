import { ExampleSection } from '#examples/-helpers';
import { PhoneNumberInput } from '@admiral-ds/react-ui';
import { useState } from 'react';

export const PhoneNumberInputState = () => {
  const [localValue, setValue] = useState<string>('+7 123 456 78 90');

  return (
    <>
      <ExampleSection text="disabled">
        <PhoneNumberInput
          disabled
          defaultCountry="RUS"
          value={localValue}
          style={{ maxWidth: '320px' }}
          onChange={(e) => setValue(e.currentTarget.value)}
          dropContainerClassName="dropContainerClass"
        />
      </ExampleSection>
      <ExampleSection text="isLoading">
        <PhoneNumberInput
          isLoading
          defaultCountry="RUS"
          value={localValue}
          style={{ maxWidth: '320px' }}
          onChange={(e) => setValue(e.currentTarget.value)}
          dropContainerClassName="dropContainerClass"
        />
      </ExampleSection>
      <ExampleSection text="readOnly">
        <PhoneNumberInput
          readOnly
          defaultCountry="RUS"
          value={localValue}
          style={{ maxWidth: '320px' }}
          onChange={(e) => setValue(e.currentTarget.value)}
          dropContainerClassName="dropContainerClass"
        />
      </ExampleSection>
      <ExampleSection text="disableCopying - отключает возможность выделения и копирования значения поля">
        <PhoneNumberInput
          disableCopying
          defaultCountry="RUS"
          value={localValue}
          style={{ maxWidth: '320px' }}
          onChange={(e) => setValue(e.currentTarget.value)}
          dropContainerClassName="dropContainerClass"
        />
      </ExampleSection>
      <ExampleSection text="skeleton">
        <PhoneNumberInput
          skeleton
          defaultCountry="RUS"
          value={localValue}
          style={{ maxWidth: '320px' }}
          onChange={(e) => setValue(e.currentTarget.value)}
          dropContainerClassName="dropContainerClass"
        />
      </ExampleSection>
    </>
  );
};
