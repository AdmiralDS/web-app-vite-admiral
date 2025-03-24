import { createFileRoute } from '@tanstack/react-router';
import { AnchorState } from '#examples/anchor/state';

export const Route = createFileRoute('/components/anchor/state')({
  component: () => <AnchorState />,
  staticData: {
    title: 'Anchor. Состояния',
  },
});
