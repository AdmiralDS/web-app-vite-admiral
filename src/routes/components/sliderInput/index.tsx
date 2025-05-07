import { createFileRoute } from '@tanstack/react-router';
import { SliderInputBasic } from '#examples/sliderInput';

export const Route = createFileRoute('/components/sliderInput/')({
  component: () => <SliderInputBasic />,
  staticData: {
    title: 'SliderInput. Базовый пример',
  },
});
