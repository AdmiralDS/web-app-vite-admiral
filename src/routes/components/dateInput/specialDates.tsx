import { createFileRoute } from '@tanstack/react-router';
import { DateInputSpecialDates } from '#examples/dateInput/specialDates';

export const Route = createFileRoute('/components/dateInput/specialDates')({
  component: () => <DateInputSpecialDates />,
  staticData: {
    title: 'DateInput. Выделение определённых дат',
  },
});
