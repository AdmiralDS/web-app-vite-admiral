import { createFileRoute } from '@tanstack/react-router';
import { CalendarViewDateAfterChoose } from '#examples/calendar/viewDateAfterChoose';

export const Route = createFileRoute('/components/calendar/viewDateAfterChoose')({
  component: () => <CalendarViewDateAfterChoose />,
  staticData: {
    title: 'Calendar. Пример с открытием экрана выбора месяца после выбора года.',
  },
});
