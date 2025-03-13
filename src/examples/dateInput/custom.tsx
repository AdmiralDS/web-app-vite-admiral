import { createFileRoute } from '@tanstack/react-router';
import { ExampleSection } from '#routes/-helpers/examples';
import { DateInput } from '@admiral-ds/react-ui';
import { useState } from 'react';
import CalendarSolidSVG from '@admiral-ds/icons/build/system/CalendarSolid.svg?react';

export const Template = () => {
  const [localValue, setValue] = useState('');

  return (
    <ExampleSection>
      <DateInput
        value={localValue}
        onChange={(e) => setValue(e.currentTarget.value)}
        placeholder="Some placeholder"
        style={{ maxWidth: 300 }}
        dropContainerClassName="dropContainerClass"
        icon={CalendarSolidSVG}
      />
    </ExampleSection>
  );
};

export const Route = createFileRoute('/components/dateInput/custom')({
  component: () => <Template />,
  staticData: {
    title: 'DateInput. С альтернативной иконкой',
  },
});
