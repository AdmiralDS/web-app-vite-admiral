import { createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';
import { ExampleSection } from '../../-helpers/examples';
import { Calendar } from '@admiral-ds/react-ui';

export const Template = () => {
  const [selected, setSelected] = useState<Date | null>(null);

  const tomorrow = new Date();
  tomorrow.setDate(new Date().getDate() + 1);

  return (
    <ExampleSection>
      <Calendar selected={selected} maxDate={tomorrow} onChange={(value: Date | null) => setSelected(value)} />
    </ExampleSection>
  );
};

export const Route = createFileRoute('/components/calendar/maxDate')({
  component: () => <Template />,
  staticData: {
    title: 'Calendar. MaxDate',
    description: 'Пример с ограничением максимальной даты.',
  },
});
