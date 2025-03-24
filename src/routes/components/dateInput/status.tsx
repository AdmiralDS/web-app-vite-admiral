import { createFileRoute } from '@tanstack/react-router';
import { DateInputStatus } from '#examples/dateInput/status';

export const Route = createFileRoute('/components/dateInput/status')({
  component: () => <DateInputStatus />,
  staticData: {
    title: 'DateInput. Статусы',
  },
});
