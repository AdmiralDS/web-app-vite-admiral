import { createFileRoute } from '@tanstack/react-router';
import { HorizontalTabsExample } from '#examples/tabMenu/horizontalTabs';

export const Route = createFileRoute('/components/tabMenu/horizontalTabs')({
  component: () => <HorizontalTabsExample />,
  staticData: {
    title: 'HorizontalTabs. Базовый пример',
  },
});
