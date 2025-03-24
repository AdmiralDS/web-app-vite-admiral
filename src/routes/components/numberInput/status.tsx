import { createFileRoute } from '@tanstack/react-router';
import { NumberInputStatus } from '#examples/numberInput/status';

export const Route = createFileRoute('/components/numberInput/status')({
  component: () => <NumberInputStatus />,
  staticData: {
    title: 'NumberInput. Статусы',
  },
});
