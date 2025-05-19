import { createFileRoute } from '@tanstack/react-router';
import { TimeInputSizes } from '#examples/timeInput/sizes';

export const Route = createFileRoute('/components/timeInput/sizes')({
  component: () => <TimeInputSizes />,
  staticData: {
    title: 'TimeInput. Размеры',
    description: 'Компонент существует в 3 размерах 32px (s), 40px (m) и 56px (xl)',
  },
});
