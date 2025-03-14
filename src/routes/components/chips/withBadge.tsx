import { createFileRoute } from '@tanstack/react-router';
import { ChipsBadges } from '#examples/chips/withBadge';

export const Route = createFileRoute('/components/chips/withBadge')({
  component: () => <ChipsBadges />,
  staticData: {
    title: 'Chips с Badge',
    description: 'В компоненте можно включать бейджи.',
  },
});
