import { createFileRoute } from '@tanstack/react-router';
import { NumberInputSizes } from '#examples/numberInput/sizes';

export const Route = createFileRoute('/components/numberInput/sizes')({
  component: () => <NumberInputSizes />,
  staticData: {
    title: 'NumberInput. Размеры',
    description: 'Компонент существует в 3 размерах s, m, xl. По умолчанию m',
  },
});
