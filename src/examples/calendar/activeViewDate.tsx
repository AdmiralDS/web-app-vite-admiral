import { useState } from 'react';
import { ExampleSection } from '#examples/-helpers';
import { Button, Calendar, ViewScreenType } from '@admiral-ds/react-ui';
import styled from 'styled-components';

const ButtonBox = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 12px;
`;

export const CalendarActiveViewDate = () => {
  const [selected, setSelected] = useState<Date | null>(null);
  const [currentActiveView, setCurrentActiveView] = useState<ViewScreenType | null>(null);

  return (
    <ExampleSection>
      <ButtonBox>
        <Button dimension="s" onClick={() => setCurrentActiveView('MONTH')}>
          Month
        </Button>
        <Button dimension="s" onClick={() => setCurrentActiveView('YEAR')}>
          Year
        </Button>
        <Button dimension="s" onClick={() => setCurrentActiveView('DAY')}>
          Day
        </Button>
      </ButtonBox>
      <Calendar
        selected={selected}
        currentActiveView={currentActiveView}
        currentActiveViewImportant={true}
        onDateIncreaseDecrease={() => {
          setCurrentActiveView(null);
        }}
        onYearSelect={(data) => {
          setSelected(data as Date);
          setCurrentActiveView('MONTH');
        }}
        onMonthSelect={(data) => {
          setSelected(data as Date);
        }}
        onViewMonthSelect={() => {
          console.log('onViewMonthSelect');
          setCurrentActiveView('MONTH');
        }}
        onViewYearSelect={() => {
          console.log('onViewYearSelect');
          setCurrentActiveView('YEAR');
        }}
        onChange={(value) => {
          setSelected(value as Date);
        }}
      />
    </ExampleSection>
  );
};
