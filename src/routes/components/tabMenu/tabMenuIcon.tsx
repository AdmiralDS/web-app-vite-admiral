import { createFileRoute } from '@tanstack/react-router';
import { TabMenuIconExample } from '#examples/tabMenu/tabMenuIcon';

export const Route = createFileRoute('/components/tabMenu/tabMenuIcon')({
  component: () => <TabMenuIconExample />,
  staticData: {
    title: 'TabMenuIcon. Базовый пример',
  },
});
