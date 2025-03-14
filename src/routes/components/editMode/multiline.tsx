import { createFileRoute } from '@tanstack/react-router';
import { EditModeMultiline } from '#examples/editMode/multiline';

export const Route = createFileRoute('/components/editMode/multiline')({
  component: () => <EditModeMultiline />,
  staticData: {
    title: 'Edit mode. Многострочное отображение',
  },
});
