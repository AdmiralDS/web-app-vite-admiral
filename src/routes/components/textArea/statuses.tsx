import { createFileRoute } from '@tanstack/react-router';
import { TextAreaStatuses } from '#examples/textArea/statuses';

export const Route = createFileRoute('/components/textArea/statuses')({
  component: () => <TextAreaStatuses />,
  staticData: {
    title: 'TextArea. Статусы',
  },
});
