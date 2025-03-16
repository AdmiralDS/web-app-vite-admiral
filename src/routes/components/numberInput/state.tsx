import { createFileRoute } from '@tanstack/react-router';
import { NumberInputState } from '#examples/numberInput/state';

export const Route = createFileRoute('/components/numberInput/state')({
  component: () => <NumberInputState />,
  staticData: {
    title: 'NumberInput. Состояния',
  },
});
