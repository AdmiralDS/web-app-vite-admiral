import { createFileRoute } from '@tanstack/react-router';
import { SliderInputSizes } from '#examples/sliderInput/sizes';

export const Route = createFileRoute('/components/sliderInput/sizes')({
  component: () => <SliderInputSizes />,
  staticData: {
    title: 'SliderInput. Размеры',
    description: 'Компонент SliderInput существует в 3 размерах S, M и XL',
  },
});
