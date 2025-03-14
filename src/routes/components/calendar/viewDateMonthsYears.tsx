import { createFileRoute } from '@tanstack/react-router';
import { CalendarViewDateMonthsYears } from '#examples/calendar/viewDateMonthsYears';

export const Route = createFileRoute('/components/calendar/viewDateMonthsYears')({
  component: () => <CalendarViewDateMonthsYears />,
  staticData: {
    title: 'Calendar. Пример с выбором только месяца/года.',
    description: 'Показываются только экраны выбора месяца и года.',
  },
});
