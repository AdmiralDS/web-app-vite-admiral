import { createFileRoute } from '@tanstack/react-router';
import { DateInputCustom } from '#examples/dateInput/custom';

export const Route = createFileRoute('/components/dateInput/custom')({
  component: () => <DateInputCustom />,
  staticData: {
    title: 'DateInput. С альтернативной иконкой',
  },
});
