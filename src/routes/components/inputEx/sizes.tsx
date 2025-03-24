import { createFileRoute } from '@tanstack/react-router';
import { InputExSizes } from '#examples/inputEx/sizes';

export const Route = createFileRoute('/components/inputEx/sizes')({
  component: () => <InputExSizes />,
  staticData: {
    title: 'InputEx. Размеры',
    description: 'Компонент существует в 3 размерах s, m, xl',
  },
});
