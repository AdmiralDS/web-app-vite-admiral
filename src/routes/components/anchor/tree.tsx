import { createFileRoute } from '@tanstack/react-router';
import { AnchorTree } from '#examples/anchor/tree';

export const Route = createFileRoute('/components/anchor/tree')({
  component: () => <AnchorTree />,
  staticData: {
    title: 'Anchor. Tree',
  },
});
