import { createFileRoute } from '@tanstack/react-router';
import { OptionsVerticalTabsExample } from '#examples/tabMenu/optionsVerticalTabs';

export const Route = createFileRoute('/components/tabMenu/optionsVerticalTabs')({
  component: () => <OptionsVerticalTabsExample />,
  staticData: {
    title: 'TabMenuVertical. Опции',
  },
});
