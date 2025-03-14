import { createFileRoute } from '@tanstack/react-router';
import { EditModeTooltip } from '#examples/editMode/tooltip';

export const Route = createFileRoute('/components/editMode/tooltip')({
  component: () => <EditModeTooltip />,
  staticData: {
    title: 'Edit mode. Тултип',
    description: 'Отображение тултипа, по умолчанию true',
  },
});
