import { createFileRoute } from '@tanstack/react-router';
import { SegmentedControlVariants } from '#examples/segmentedControl/variants';

export const Route = createFileRoute('/components/segmentedControl/variants')({
  component: () => <SegmentedControlVariants />,
  staticData: {
    title: 'SegmentedControl. Варианты',
    description: '',
  },
});
