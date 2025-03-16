import { createFileRoute } from '@tanstack/react-router';
import { SliderBasic } from '#examples/slider';

export const Route = createFileRoute('/components/slider/')({
  component: () => <SliderBasic />,
  staticData: {
    title: 'Slider. Базовый пример',
  },
});
