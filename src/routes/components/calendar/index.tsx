import { createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';
import { ExampleSection } from '../../-helpers/examples';
import { Calendar } from '@admiral-ds/react-ui';

export const Template = () => {
  const [selected, setSelected] = useState<Date | null>(null);

  return (
    <ExampleSection>
      <Calendar selected={selected} onChange={(value: Date | null) => setSelected(value)} />
    </ExampleSection>
  );
};

export const Route = createFileRoute('/components/calendar/')({
  component: () => <Template />,
  staticData: {
    title: 'Calendar. Базовый пример',
  },
});
