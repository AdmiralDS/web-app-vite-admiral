import { createFileRoute } from '@tanstack/react-router';
import { NumberInputMinMaxValue } from '#examples/numberInput/minMaxValue';

export const Route = createFileRoute('/components/numberInput/minMaxValue')({
  component: () => <NumberInputMinMaxValue />,
  staticData: {
    title: 'NumberInput. Пример с minValue, maxValue',
  },
});
