import { createFileRoute } from '@tanstack/react-router';
import { ExampleSection } from '../../-helpers/examples';
import { PhoneNumberInput } from '@admiral-ds/react-ui';
import { useState } from 'react';

export const Template = () => {
  const [localValue, setValue] = useState<string>('+7 123 456 78 90');
  const [localValue2, setValue2] = useState<string>('+7 123 456 78 90');
  const [localValue3, setValue3] = useState<string>('+7 123 456 78 90');

  return (
    <>
      <ExampleSection text="Размер S">
        <PhoneNumberInput
          dimension="s"
          defaultCountry="RUS"
          value={localValue}
          style={{ maxWidth: '320px' }}
          onChange={(e) => setValue(e.currentTarget.value)}
          dropContainerClassName="dropContainerClass"
        />
      </ExampleSection>
      <ExampleSection text="Размер M">
        <PhoneNumberInput
          dimension="m"
          defaultCountry="RUS"
          value={localValue2}
          style={{ maxWidth: '320px' }}
          onChange={(e) => setValue2(e.currentTarget.value)}
          dropContainerClassName="dropContainerClass"
        />
      </ExampleSection>
      <ExampleSection text="Размер XL">
        <PhoneNumberInput
          dimension="xl"
          defaultCountry="RUS"
          value={localValue3}
          style={{ maxWidth: '320px' }}
          onChange={(e) => setValue3(e.currentTarget.value)}
          dropContainerClassName="dropContainerClass"
        />
      </ExampleSection>
    </>
  );
};

export const Route = createFileRoute('/components/phoneNumberInput/sizes')({
  component: () => <Template />,
  staticData: {
    title: 'PhoneNumberInput. Состояния',
    description: 'Компонент существует в 3 размерах s, m, xl',
  },
});
