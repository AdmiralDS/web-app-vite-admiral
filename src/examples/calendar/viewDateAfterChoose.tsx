import { useState } from 'react';
import { ExampleSection } from '#examples/-helpers';
import { Calendar, ViewScreenType } from '@admiral-ds/react-ui';

export const CalendarViewDateAfterChoose = () => {
  const [selected, setSelected] = useState<Date | null>(null);
  const [currentActiveView, setActiveViewDateScreen] = useState<ViewScreenType | null>(null);
  return (
    <ExampleSection>
      <Calendar
        selected={selected}
        currentActiveView={currentActiveView}
        onDateIncreaseDecrease={(date) => {
          setActiveViewDateScreen(null);
          console.log(date, 'onIncreaseDecreaseDate');
        }}
        onChange={(value) => {
          setSelected(value as Date);
          console.log(value, 'onChange');
        }}
        onYearSelect={() => {
          setActiveViewDateScreen('MONTH');
        }}
      />
    </ExampleSection>
  );
};
