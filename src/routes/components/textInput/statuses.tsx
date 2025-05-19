import { createFileRoute } from '@tanstack/react-router';
import { TextInputStatuses } from '#examples/textInput/statuses';

export const Route = createFileRoute('/components/textInput/statuses')({
  component: () => <TextInputStatuses />,
  staticData: {
    title: 'TextInput. Статусы',
  },
});
