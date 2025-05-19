import { createFileRoute } from '@tanstack/react-router';
import { SliderRangeInputSizes } from '#examples/sliderRangeInput/sizes';

export const Route = createFileRoute('/components/sliderRangeInput/sizes')({
  component: () => <SliderRangeInputSizes />,
  staticData: {
    title: 'SliderRange. Размеры',
    description: 'Компонент SliderRange существует в 3 размерах S, M и XL',
  },
});
