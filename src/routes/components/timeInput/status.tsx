import { createFileRoute } from '@tanstack/react-router';
import { TimeInputStatus } from '#examples/timeInput/status';

export const Route = createFileRoute('/components/timeInput/status')({
  component: () => <TimeInputStatus />,
  staticData: {
    title: 'TimeInput. Статусы',
  },
});
