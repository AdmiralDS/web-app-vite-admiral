import { createFileRoute } from '@tanstack/react-router';
import { SizeExample } from '#examples/tabMenu/size';

export const Route = createFileRoute('/components/tabMenu/size')({
  component: () => <SizeExample />,
  staticData: {
    title: 'TabMenuHorizontal. Размеры',
    description: 'Компонент TabMenu существует в двух размерах - L 48 и M 40 px по высоте.',
  },
});
