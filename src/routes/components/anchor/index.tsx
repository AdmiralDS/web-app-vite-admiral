import { createFileRoute } from '@tanstack/react-router';
import { AnchorBasic } from '#examples/anchor';

export const Route = createFileRoute('/components/anchor/')({
  component: () => <AnchorBasic />,
  staticData: {
    title: 'Anchor. Базовый пример',
  },
});
