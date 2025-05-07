import { createFileRoute } from '@tanstack/react-router';
import { SliderInputState } from '#examples/sliderInput/states';

export const Route = createFileRoute('/components/sliderInput/states')({
  component: () => <SliderInputState />,
  staticData: {
    title: 'SliderInput. Состояния',
  },
});
