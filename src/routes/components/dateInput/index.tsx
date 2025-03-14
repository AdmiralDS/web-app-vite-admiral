import { createFileRoute } from '@tanstack/react-router';
import { DateInputBasic } from '#examples/dateInput';

export const Route = createFileRoute('/components/dateInput/')({
  component: () => <DateInputBasic />,
  staticData: {
    title: 'DateInput. Базовый пример',
  },
});
