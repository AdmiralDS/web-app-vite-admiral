import { createFileRoute } from '@tanstack/react-router';
import { SliderRange } from '#examples/slider/range';

export const Route = createFileRoute('/components/slider/range')({
  component: () => <SliderRange />,
  staticData: {
    title: 'Range. Базовый пример',
  },
});
