import { createFileRoute } from '@tanstack/react-router';
import { DateInputState } from '#examples/dateInput/state';

export const Route = createFileRoute('/components/dateInput/state')({
  component: () => <DateInputState />,
  staticData: {
    title: 'DateInput. Состояния',
  },
});
