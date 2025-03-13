import { useState } from 'react';
import { ExampleSection, PStyled } from '#routes/-helpers/examples';
import { Calendar, ViewScreenType } from '@admiral-ds/react-ui';

export const CalendarCallback = () => {
  const [selected, setSelected] = useState<Date | null>(null);

  return (
    <ExampleSection
      text={
        <>
          <PStyled>Открытие экранов выбора года и месяца '(onViewEnter, onViewLeave)'</PStyled>
          <PStyled>Изменение даты после выбора года или месяца по стрелкам '(onIncreaseDecreaseDate)'</PStyled>
        </>
      }
    >
      <Calendar
        selected={selected}
        onChange={(value) => {
          setSelected(value as Date);
        }}
        onDateIncreaseDecrease={(value) => {
          console.log('onIncreaseDecreaseDate', value);
        }}
        onViewEnter={(view: ViewScreenType) => {
          console.log('onViewEnter', view);
        }}
        onViewLeave={(view: ViewScreenType) => {
          console.log('onViewLeave', view);
        }}
      />
    </ExampleSection>
  );
};
