import { ExampleSection } from '#examples/-helpers';
import { DateInput } from '@admiral-ds/react-ui';
import { useState } from 'react';
import { css } from 'styled-components';

const weekendMixin = css<{ disabled?: boolean }>`
  color: ${(p) =>
    p.disabled
      ? `var(--admiral-color-Error_Error30, ${p.theme.color['Error/Error 30']})`
      : `var(--admiral-color-Error_Error60Main, ${p.theme.color['Error/Error 60 Main']})`};
`;

export const DateInputSpecialDates = () => {
  const [localValue, setValue] = useState('');

  const highlightWeekend = (date: Date) => {
    const dayNumber = date.getDay();
    if (dayNumber === 0 || dayNumber === 6) {
      return weekendMixin;
    }
  };

  return (
    <ExampleSection>
      <DateInput
        value={localValue}
        onChange={(e) => setValue(e.currentTarget.value)}
        placeholder="Some placeholder"
        style={{ maxWidth: 300 }}
        dropContainerClassName="dropContainerClass"
        highlightSpecialDay={highlightWeekend}
      />
    </ExampleSection>
  );
};
