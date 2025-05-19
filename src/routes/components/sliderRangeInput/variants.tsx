import { createFileRoute } from '@tanstack/react-router';
import { SliderRangeInputVariants } from '#examples/sliderRangeInput/variants';

export const Route = createFileRoute('/components/sliderRangeInput/variants')({
  component: () => <SliderRangeInputVariants />,
  staticData: {
    title: 'SliderRange. Варианты использования',
  },
});
