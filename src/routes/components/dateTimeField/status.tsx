import { createFileRoute } from '@tanstack/react-router';
import { DateTimeFieldStatus } from '#examples/dateTimeField/status';

export const Route = createFileRoute('/components/dateTimeField/status')({
  component: () => <DateTimeFieldStatus />,
  staticData: {
    title: 'DateTime Field. Состояние/статус',
  },
});
