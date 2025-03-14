import { createFileRoute } from '@tanstack/react-router';
import { DateInputVariants } from '#examples/dateInput/variants';

export const Route = createFileRoute('/components/dateInput/variants')({
  component: () => <DateInputVariants />,
  staticData: {
    title: 'DateInput. Варианты отображения дат',
  },
});
