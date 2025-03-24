import { createFileRoute } from '@tanstack/react-router';
import { NumberInputSpaces } from '#examples/numberInput/spaces';

export const Route = createFileRoute('/components/numberInput/spaces')({
  component: () => <NumberInputSpaces />,
  staticData: {
    title: 'NumberInput. Пример скрытия пробелов',
  },
});
