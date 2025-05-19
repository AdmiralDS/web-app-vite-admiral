import { createFileRoute } from '@tanstack/react-router';
import { TimeInputCustom } from '#examples/timeInput/custom';

export const Route = createFileRoute('/components/timeInput/custom')({
  component: () => <TimeInputCustom />,
  staticData: {
    title: 'TimeInput. Кастомизация',
  },
});
