import { useState } from 'react';
import { ExampleSection } from '#routes/-helpers/examples';
import { Calendar } from '@admiral-ds/react-ui';

export const CalendarBasic = () => {
  const [selected, setSelected] = useState<Date | null>(null);

  return (
    <ExampleSection>
      <Calendar selected={selected} onChange={(value: Date | null) => setSelected(value)} />
    </ExampleSection>
  );
};
