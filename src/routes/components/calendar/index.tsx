import { createFileRoute } from '@tanstack/react-router';
import { CalendarBasic } from '#examples/calendar';

export const Route = createFileRoute('/components/calendar/')({
  component: () => <CalendarBasic />,
  staticData: {
    title: 'Calendar. Базовый пример',
  },
});
