import { createFileRoute } from '@tanstack/react-router';
import { SliderRangeInputCustom } from '#examples/sliderRangeInput/custom';

export const Route = createFileRoute('/components/sliderRangeInput/custom')({
  component: () => <SliderRangeInputCustom />,
  staticData: {
    title: 'SliderRange. Кастомизация',
  },
});
