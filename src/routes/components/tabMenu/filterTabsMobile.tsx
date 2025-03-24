import { createFileRoute } from '@tanstack/react-router';
import { FilterTabsMobileExample } from '#examples/tabMenu/filterTabsMobile';

export const Route = createFileRoute('/components/tabMenu/filterTabsMobile')({
  component: () => <FilterTabsMobileExample />,
  staticData: {
    title: 'FilterTabs. Мобильная версия',
  },
});
