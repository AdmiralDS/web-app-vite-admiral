import { createFileRoute } from '@tanstack/react-router';
import { SliderSizes } from '#examples/slider/sizes';

export const Route = createFileRoute('/components/slider/sizes')({
  component: () => <SliderSizes />,
  staticData: {
    title: 'Slider. Размеры',
    description: 'Компонент Slider существует в 2 размерах M и XL',
  },
});
