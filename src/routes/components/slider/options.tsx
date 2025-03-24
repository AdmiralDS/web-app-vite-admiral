import { createFileRoute } from '@tanstack/react-router';
import { SliderOptions } from '#examples/slider/options';

export const Route = createFileRoute('/components/slider/options')({
  component: () => <SliderOptions />,
  staticData: {
    title: 'Slider. C настройками minValue, maxValue',
  },
});
