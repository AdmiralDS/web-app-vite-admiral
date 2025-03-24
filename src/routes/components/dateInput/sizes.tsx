import { createFileRoute } from '@tanstack/react-router';
import { DateInputSizes } from '#examples/dateInput/sizes';

export const Route = createFileRoute('/components/dateInput/sizes')({
  component: () => <DateInputSizes />,
  staticData: {
    title: 'DateInput. Размеры',
    description: 'Компонент существует в 3 размерах 32px (s), 40px (m) и 56px (xl)',
  },
});
