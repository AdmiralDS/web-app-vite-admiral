import { createFileRoute } from '@tanstack/react-router';
import { SliderInputCustom } from '#examples/sliderInput/custom';

export const Route = createFileRoute('/components/sliderInput/custom')({
  component: () => <SliderInputCustom />,
  staticData: {
    title: 'SliderInput. Кастомизация',
  },
});
