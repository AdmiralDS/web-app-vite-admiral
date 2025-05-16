import { createFileRoute } from '@tanstack/react-router';
import { SliderRangeState } from '#examples/slider/rangeState';

export const Route = createFileRoute('/components/slider/rangeState')({
  component: () => <SliderRangeState />,
  staticData: {
    title: 'Range. Состояния',
  },
});
