import { createFileRoute } from '@tanstack/react-router';
import { DateFieldState } from '#examples/dateInput/dateFieldState';

export const Route = createFileRoute('/components/dateInput/dateFieldState')({
  component: () => <DateFieldState />,
  staticData: {
    title: 'DateField. Состояния',
    description: 'DateField имеет такие же состояния как и DateInput, кроме тех, которые представлены здесь.',
  },
});
