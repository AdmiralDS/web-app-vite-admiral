import { createFileRoute } from '@tanstack/react-router';
import { CalendarMaxDate } from '#examples/calendar/maxDate';

export const Route = createFileRoute('/components/calendar/maxDate')({
  component: () => <CalendarMaxDate />,
  staticData: {
    title: 'Calendar. MaxDate',
    description: 'Пример с ограничением максимальной даты.',
  },
});
