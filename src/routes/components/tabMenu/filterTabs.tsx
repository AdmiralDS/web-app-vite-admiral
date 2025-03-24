import { createFileRoute } from '@tanstack/react-router';
import { FilterTabsExample } from '#examples/tabMenu/filterTabs';

export const Route = createFileRoute('/components/tabMenu/filterTabs')({
  component: () => <FilterTabsExample />,
  staticData: {
    title: 'FilterTabs. Базовый пример',
  },
});
