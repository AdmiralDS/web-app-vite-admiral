import { createFileRoute } from '@tanstack/react-router';
import { SliderRangeSizes } from '#examples/slider/rangeSizes';

export const Route = createFileRoute('/components/slider/rangeSizes')({
  component: () => <SliderRangeSizes />,
  staticData: {
    title: 'Range. Размеры',
    description: 'Компонент существует в 2 размерах S и M',
  },
});
