import { useState } from 'react';
import { ExampleSection } from '#routes/-helpers/examples';
import { Calendar } from '@admiral-ds/react-ui';

export const CalendarFilterDate = () => {
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
