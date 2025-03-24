import { useState } from 'react';
import { ExampleSection } from '#examples/-helpers';
import { Calendar, weekendMixin } from '@admiral-ds/react-ui';
import { css } from 'styled-components';

const highlightHolidays = (date: Date) => {
  const dayNumber = date.getDay();
  if (dayNumber === 0 || dayNumber === 6) {
    return weekendMixin;
  } else if (dayNumber === 4 || dayNumber === 3) {
    return holidayMixin;
  } else if (dayNumber === 2) {
    return preHolidayMixin;
  } else return undefined;
};

const holidayMixin = css<{ disabled?: boolean }>`
  color: ${(p) =>
    p.disabled
      ? `var(--admiral-color-Success_Success30, ${p.theme.color['Success/Success 30']})`
      : `var(--admiral-color-Success_Success50Main, ${p.theme.color['Success/Success 50 Main']})`};
`;

const preHolidayMixin = css<{ disabled?: boolean }>`
  color: ${(p) =>
    p.disabled
      ? `var(--admiral-color-Attention_Attention30, ${p.theme.color['Attention/Attention 30']})`
      : `var(--admiral-color-Attention_Attention50Main, ${p.theme.color['Attention/Attention 50 Main']})`};
`;

export const CalendarSpecialDates = () => {
  const [selected, setSelected] = useState<Date | null>(null);

  return (
    <ExampleSection>
      <Calendar
        selected={selected}
        onChange={(value: Date | null) => setSelected(value)}
        highlightSpecialDay={highlightHolidays}
      />
    </ExampleSection>
  );
};
