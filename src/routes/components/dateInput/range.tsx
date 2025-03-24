import { createFileRoute } from '@tanstack/react-router';
import { DateInputRange } from '#examples/dateInput/range';

export const Route = createFileRoute('/components/dateInput/range')({
  component: () => <DateInputRange />,
  staticData: {
    title: 'DateInput. Type "date-range"',
  },
});
