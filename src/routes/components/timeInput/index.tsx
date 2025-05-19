import { createFileRoute } from '@tanstack/react-router';
import { TimeInputBasic } from '#examples/timeInput';

export const Route = createFileRoute('/components/timeInput/')({
  component: () => <TimeInputBasic />,
  staticData: {
    title: 'TimeInput. Базовый пример',
  },
});
