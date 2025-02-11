import { createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';
import { ExampleSection } from '../../-helpers/examples';
import { Calendar } from '@admiral-ds/react-ui';

export const Template = () => {
  const [selected, setSelected] = useState<Date | null>(null);

  const isWeekday = (date: Date) => {
    const day = date.getDay();
    return day !== 0 && day !== 6;
  };

  return (
    <ExampleSection>
      <Calendar selected={selected} filterDate={isWeekday} onChange={(value: Date | null) => setSelected(value)} />
    </ExampleSection>
  );
};

export const Route = createFileRoute('/components/calendar/filterDate')({
  component: () => <Template />,
  staticData: {
    title: 'Calendar. FilterDate',
    description: 'Пример с недоступными для выбора датами.',
  },
});
