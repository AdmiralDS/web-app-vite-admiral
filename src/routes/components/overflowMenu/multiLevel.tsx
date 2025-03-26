import { createFileRoute } from '@tanstack/react-router';
import { OverflowMenuMultiLevel } from '#examples/overflowMenu/multiLevel';

export const Route = createFileRoute('/components/overflowMenu/multiLevel')({
  component: () => <OverflowMenuMultiLevel />,
  staticData: {
    title: 'OverflowMenu. Пример многоуровневого меню',
  },
});
