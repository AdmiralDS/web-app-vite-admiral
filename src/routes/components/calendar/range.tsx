import { createFileRoute } from '@tanstack/react-router';
import { CalendarRange } from '#examples/calendar/range';

export const Route = createFileRoute('/components/calendar/range')({
  component: () => <CalendarRange />,
  staticData: {
    title: 'Calendar. Range',
    description: 'Пример с выбором диапазона.',
  },
});
