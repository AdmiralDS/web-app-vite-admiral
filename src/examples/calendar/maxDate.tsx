import { useState } from 'react';
import { ExampleSection } from '#routes/-helpers/examples';
import { Calendar } from '@admiral-ds/react-ui';

export const CalendarMaxDate = () => {
  const [selected, setSelected] = useState<Date | null>(null);

  const tomorrow = new Date();
  tomorrow.setDate(new Date().getDate() + 1);

  return (
    <ExampleSection>
      <Calendar selected={selected} maxDate={tomorrow} onChange={(value: Date | null) => setSelected(value)} />
    </ExampleSection>
  );
};
