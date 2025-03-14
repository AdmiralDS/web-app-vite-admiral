import { createFileRoute } from '@tanstack/react-router';
import { CalendarActiveViewDate } from '#examples/calendar/activeViewDate';

export const Route = createFileRoute('/components/calendar/activeViewDate')({
  component: () => <CalendarActiveViewDate />,
  staticData: {
    title: 'Calendar. Пример с переключением экранов выбора дат - месяц/год/день.',
  },
});
