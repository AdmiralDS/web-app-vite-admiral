import { createFileRoute } from '@tanstack/react-router';
import { ExampleSection } from '#routes/-helpers/examples';
import { PhoneNumberInput } from '@admiral-ds/react-ui';
import { useState } from 'react';

export const Template = () => {
  const [localValue, setValue] = useState<string>('+7 123 456 78 90');
  const [localValue2, setValue2] = useState<string>('+7 123 456 78 90');

  return (
    <>
      <ExampleSection text="Success">
        <PhoneNumberInput
          status="success"
          defaultCountry="RUS"
          value={localValue}
          style={{ maxWidth: '320px' }}
          onChange={(e) => setValue(e.currentTarget.value)}
          dropContainerClassName="dropContainerClass"
        />
      </ExampleSection>
      <ExampleSection text="Error">
        <PhoneNumberInput
          status="error"
          defaultCountry="RUS"
          value={localValue2}
          style={{ maxWidth: '320px' }}
          onChange={(e) => setValue2(e.currentTarget.value)}
          dropContainerClassName="dropContainerClass"
        />
      </ExampleSection>
    </>
  );
};

export const Route = createFileRoute('/components/phoneNumberInput/status')({
  component: () => <Template />,
  staticData: {
    title: 'PhoneNumberInput. Статусы',
  },
});
