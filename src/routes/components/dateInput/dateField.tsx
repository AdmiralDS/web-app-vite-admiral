import { createFileRoute } from '@tanstack/react-router';
import { DateInputField } from '#examples/dateInput/dateField';

export const Route = createFileRoute('/components/dateInput/dateField')({
  component: () => <DateInputField />,
  staticData: {
    title: 'DateField. Базовый пример',
  },
});
