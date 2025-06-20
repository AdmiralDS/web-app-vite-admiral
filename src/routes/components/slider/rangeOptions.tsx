import { createFileRoute } from '@tanstack/react-router';
import { SliderRangeOptions } from '#examples/slider/rangeOptions';

export const Route = createFileRoute('/components/slider/rangeOptions')({
  component: () => <SliderRangeOptions />,
  staticData: {
    title: 'Range. C настройками minValue, maxValue',
  },
});
