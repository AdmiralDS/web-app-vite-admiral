import { createFileRoute } from '@tanstack/react-router';
import { SegmentedControlSizes } from '#examples/segmentedControl/sizes';

export const Route = createFileRoute('/components/segmentedControl/sizes')({
  component: () => <SegmentedControlSizes />,
  staticData: {
    title: 'SegmentedControl. Размеры',
    description: '',
  },
});
