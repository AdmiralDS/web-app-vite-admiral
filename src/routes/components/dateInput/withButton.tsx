import { createFileRoute } from '@tanstack/react-router';
import { ExampleSection } from '../../-helpers/examples';
import { ActionsPanel, DateInput, TextButton } from '@admiral-ds/react-ui';
import { useState } from 'react';

export const Template = () => {
  const [localValue, setValue] = useState('');
  const [viewDateLocal, setViewDateLocal] = useState<Date | null>(localValue !== '' ? new Date(localValue) : null);

  const handleViewDateLocalChange = (newDate: Date) => {
    setViewDateLocal(newDate);
  };

  const renderPanelToday = () => {
    const handleTodayButtonMouseDown: React.MouseEventHandler = (e) => {
      e.preventDefault();
      e.stopPropagation();
      const today = new Date();
      handleViewDateLocalChange(today);
    };
    return (
      <ActionsPanel>
        <TextButton dimension="s" text="Сегодня" onMouseDown={handleTodayButtonMouseDown} />
      </ActionsPanel>
    );
  };

  return (
    <ExampleSection>
      <DateInput
        value={localValue}
        onChange={(e) => setValue(e.currentTarget.value)}
        viewDate={viewDateLocal}
        onViewDateChange={handleViewDateLocalChange}
        placeholder="Some placeholder"
        style={{ maxWidth: 300 }}
        dropContainerClassName="dropContainerClass"
        renderBottomPanel={renderPanelToday}
      />
    </ExampleSection>
  );
};

export const Route = createFileRoute('/components/dateInput/withButton')({
  component: () => <Template />,
  staticData: {
    title: 'DateInput. С кнопкой "Сегодня"',
  },
});
