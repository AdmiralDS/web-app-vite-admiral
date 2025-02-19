import { createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';
import { ExampleSection } from '../../-helpers/examples';
import { Calendar, ViewScreenType } from '@admiral-ds/react-ui';

export const Template = () => {
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

export const Route = createFileRoute('/components/calendar/viewDateAfterChoose')({
  component: () => <Template />,
  staticData: {
    title: 'Calendar. Пример с открытием экрана выбора месяца после выбора года.',
  },
});
