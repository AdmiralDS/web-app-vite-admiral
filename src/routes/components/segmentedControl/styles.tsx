import { createFileRoute } from '@tanstack/react-router';
import { SegmentedControlStyles } from '#examples/segmentedControl/styles';

export const Route = createFileRoute('/components/segmentedControl/styles')({
  component: () => <SegmentedControlStyles />,
  staticData: {
    title: 'SegmentedControl. Стили',
    description: 'Присутствуют два типа Segmented Control: Outlined и Filled',
  },
});
