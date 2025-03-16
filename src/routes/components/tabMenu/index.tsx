import { createFileRoute } from '@tanstack/react-router';
import { TabMenuBasic } from '#examples/tabMenu';

export const Route = createFileRoute('/components/tabMenu/')({
  component: () => <TabMenuBasic />,
  staticData: {
    title: 'TabMenuHorizontal. Базовый пример',
  },
});
