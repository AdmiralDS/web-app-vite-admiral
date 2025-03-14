import { createFileRoute } from '@tanstack/react-router';
import { CalendarCallback } from '#examples/calendar/callback';

export const Route = createFileRoute('/components/calendar/callback')({
  component: () => <CalendarCallback />,
  staticData: {
    title: 'Calendar. Callback',
    description: 'Пример с коллбеками (смотри в консоль)',
  },
});
