import { createFileRoute } from '@tanstack/react-router';
import { MenuMultiLine } from '#examples/dropdown/menuMultiLine';

export const Route = createFileRoute('/components/dropdown/menuMultiLine')({
  component: () => <MenuMultiLine />,
  staticData: {
    title: 'Menu. Многострочные пункты',
    description: '',
  },
});
