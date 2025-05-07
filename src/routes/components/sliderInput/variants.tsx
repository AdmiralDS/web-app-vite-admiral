import { createFileRoute } from '@tanstack/react-router';
import { SliderInputVariants } from '#examples/sliderInput/variants';

export const Route = createFileRoute('/components/sliderInput/variants')({
  component: () => <SliderInputVariants />,
  staticData: {
    title: 'SliderInput. Варианты использования',
  },
});
