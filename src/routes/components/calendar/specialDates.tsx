import { createFileRoute } from '@tanstack/react-router';
import { CalendarSpecialDates } from '#examples/calendar/specialDates';

export const Route = createFileRoute('/components/calendar/specialDates')({
  component: () => <CalendarSpecialDates />,
  staticData: {
    title: 'Calendar. Выделение определённых дат',
    description: 'Пример с подсветкой выходных, праздничный и специальных дат.',
  },
});
