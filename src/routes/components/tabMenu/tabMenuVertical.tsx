import { createFileRoute } from '@tanstack/react-router';
import { TabMenuVerticalExample } from '#examples/tabMenu/tabMenuVertical';

export const Route = createFileRoute('/components/tabMenu/tabMenuVertical')({
  component: () => <TabMenuVerticalExample />,
  staticData: {
    title: 'TabMenuVertical. Базовый пример',
  },
});
