import { createFileRoute } from '@tanstack/react-router';
import { EditModeStatus } from '#examples/editMode/status';

export const Route = createFileRoute('/components/editMode/status')({
  component: () => <EditModeStatus />,
  staticData: {
    title: 'Edit mode. Состояние/статус',
  },
});
