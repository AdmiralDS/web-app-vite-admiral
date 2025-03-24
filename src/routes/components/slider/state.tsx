import { createFileRoute } from '@tanstack/react-router';
import { SliderState } from '#examples/slider/state';

export const Route = createFileRoute('/components/slider/state')({
  component: () => <SliderState />,
  staticData: {
    title: 'Slider. Состояния',
  },
});
