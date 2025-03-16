import { createFileRoute } from '@tanstack/react-router';
import { SegmentedControlStates } from '#examples/segmentedControl/states';

export const Route = createFileRoute('/components/segmentedControl/states')({
  component: () => <SegmentedControlStates />,
  staticData: {
    title: 'SegmentedControl. Состояния',
    description: '',
  },
});
