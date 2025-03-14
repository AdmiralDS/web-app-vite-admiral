import { createFileRoute } from '@tanstack/react-router';
import { DateInputWithButton } from '#examples/dateInput/withButton';

export const Route = createFileRoute('/components/dateInput/withButton')({
  component: () => <DateInputWithButton />,
  staticData: { title: 'DateInput. С кнопкой "Сегодня"' },
});
