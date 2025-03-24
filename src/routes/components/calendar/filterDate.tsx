import { createFileRoute } from '@tanstack/react-router';
import { CalendarFilterDate } from '#examples/calendar/filterDate';

export const Route = createFileRoute('/components/calendar/filterDate')({
  component: () => <CalendarFilterDate />,
  staticData: {
    title: 'Calendar. FilterDate',
    description: 'Пример с недоступными для выбора датами.',
  },
});
