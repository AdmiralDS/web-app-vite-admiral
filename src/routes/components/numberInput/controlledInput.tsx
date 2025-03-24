import { createFileRoute } from '@tanstack/react-router';
import { NumberInputControlled } from '#examples/numberInput/controlledInput';

export const Route = createFileRoute('/components/numberInput/controlledInput')({
  component: () => <NumberInputControlled />,
  staticData: {
    title: 'NumberInput. Примеры контролируемого инпута',
  },
});
