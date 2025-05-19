import { createFileRoute } from '@tanstack/react-router';
import { SliderRangeInputState } from '#examples/sliderRangeInput/states';

export const Route = createFileRoute('/components/sliderRangeInput/states')({
  component: () => <SliderRangeInputState />,
  staticData: {
    title: 'SliderRange. Состояния',
  },
});
