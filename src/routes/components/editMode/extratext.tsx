import { createFileRoute } from '@tanstack/react-router';
import { EditModeExtraText } from '#examples/editMode/extratext';

export const Route = createFileRoute('/components/editMode/extratext')({
  component: () => <EditModeExtraText />,
  staticData: {
    title: 'Edit mode. Дополнительный текст и лэйбл',
  },
});
