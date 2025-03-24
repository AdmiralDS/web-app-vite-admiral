import { createFileRoute } from '@tanstack/react-router';
import { SizeVerticalTabsExample } from '#examples/tabMenu/sizeVerticalTabs';

export const Route = createFileRoute('/components/tabMenu/sizeVerticalTabs')({
  component: () => <SizeVerticalTabsExample />,
  staticData: {
    title: 'TabMenuVertical. Размеры',
    description: 'Компонент TabMenuVertical существует в двух размерах - L 48 и M 40 px по высоте.',
  },
});
