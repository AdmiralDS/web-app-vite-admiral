import { useState } from 'react';
import { ExampleSection } from '#routes/-helpers/examples';
import { Calendar, ViewScreenType } from '@admiral-ds/react-ui';

export const CalendarViewDateMonthsYears = () => {
  const [selected, setSelected] = useState<Date | null>(null);
  const [currentActiveView, setCurrentActiveView] = useState<ViewScreenType | null>('MONTH');

  return (
    <ExampleSection text="Если выставлен currentActiveViewImportant, то необходимо самому управлять открытием экранов">
      <Calendar
        selected={selected}
        currentActiveView={currentActiveView}
        currentActiveViewImportant={true}
        onDateIncreaseDecrease={(date) => {
          console.log(date, 'onIncreaseDecreaseDate');
          setSelected(date as Date);
        }}
        onChange={(value) => {
          setSelected(value as Date);
          console.log(value, 'onChange');
        }}
        onViewMonthSelect={() => {
          console.log('onViewMonthSelect');
          setCurrentActiveView('MONTH');
        }}
        onViewYearSelect={() => {
          console.log('onViewYearSelect');
          setCurrentActiveView('YEAR');
        }}
      />
    </ExampleSection>
  );
};
