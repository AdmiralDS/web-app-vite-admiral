import { createFileRoute } from '@tanstack/react-router';
import { FilterTabsSizeExample } from '#examples/tabMenu/filterTabsSize';

export const Route = createFileRoute('/components/tabMenu/filterTabsSize')({
  component: () => <FilterTabsSizeExample />,
  staticData: {
    title: 'FilterTabs. Размеры',
    description: 'Компонент FilterTabs существует в двух размерах - M 40 и S 32 px по высоте.',
  },
});
