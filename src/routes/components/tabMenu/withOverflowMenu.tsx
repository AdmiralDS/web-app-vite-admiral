import { createFileRoute } from '@tanstack/react-router';
import { WithOverflowMenuExample } from '#examples/tabMenu/withOverflowMenu';

export const Route = createFileRoute('/components/tabMenu/withOverflowMenu')({
  component: () => <WithOverflowMenuExample />,
  staticData: {
    title: 'TabMenu. С Overflow Menu',
  },
});
