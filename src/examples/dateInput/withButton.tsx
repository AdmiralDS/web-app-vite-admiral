import { ExampleSection } from '#examples/-helpers';
import { ActionsPanel, DateInput, TextButton, changeInputData, refSetter } from '@admiral-ds/react-ui';
import type { DateInputProps } from '@admiral-ds/react-ui';
import { useState, forwardRef, useRef } from 'react';

const CustomDateInput = forwardRef<HTMLInputElement, DateInputProps>((props, ref) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [viewDateLocal, setViewDateLocal] = useState<Date | null>(null);

  const handleViewDateLocalChange = (newDate: Date) => {
    setViewDateLocal(newDate);
  };

  const renderPanelToday = () => {
    const handleTodayButtonMouseDown: React.MouseEventHandler = (e) => {
      e.preventDefault();
      e.stopPropagation();
      const today = new Date();
      handleViewDateLocalChange(today);
      if (inputRef.current)
        changeInputData(inputRef.current, { value: today.toLocaleDateString('ru', { timeZone: 'UTC' }) });
    };
    return (
      <ActionsPanel>
        <TextButton dimension="s" text="Сегодня" onMouseDown={handleTodayButtonMouseDown} />
      </ActionsPanel>
    );
  };

  return (
    <DateInput
      {...props}
      ref={refSetter(ref, inputRef)}
      viewDate={viewDateLocal}
      onViewDateChange={handleViewDateLocalChange}
      renderBottomPanel={renderPanelToday}
    />
  );
});

export const DateInputWithButton = () => {
  const [localValue, setValue] = useState('');
  return (
    <ExampleSection>
      <CustomDateInput
        value={localValue}
        onChange={(e) => {
          console.log(`new value:${e.target.value}`);
          setValue(e.currentTarget.value);
        }}
        placeholder="Some placeholder"
        style={{ maxWidth: 300 }}
        dropContainerClassName="dropContainerClass"
      />
    </ExampleSection>
  );
};
