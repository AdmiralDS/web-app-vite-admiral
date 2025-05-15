import { createFileRoute } from '@tanstack/react-router';
import { SliderRangeInputBasic } from '#examples/sliderRangeInput';

export const Route = createFileRoute('/components/sliderRangeInput/')({
  component: () => <SliderRangeInputBasic />,
  staticData: {
    title: 'SliderRange. Базовый пример',
  },
});
