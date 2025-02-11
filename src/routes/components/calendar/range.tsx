import { createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';
import { ExampleSection } from '../../-helpers/examples';
import { Calendar } from '@admiral-ds/react-ui';

export const Template = () => {
  const [selected, setSelected] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  const handleChange = (value: Date | (Date | null)[] | null) => {
    if (value !== null && !(value instanceof Date)) {
      setSelected(value[0]);
      setEndDate(value[1]);
    }
  };

  return (
    <ExampleSection>
      <Calendar range startDate={selected} endDate={endDate} onChange={handleChange} />
    </ExampleSection>
  );
};

export const Route = createFileRoute('/components/calendar/range')({
  component: () => <Template />,
  staticData: {
    title: 'Calendar. Range',
    description: 'Пример с выбором диапазона.',
  },
});
