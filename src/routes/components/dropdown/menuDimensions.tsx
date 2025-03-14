import { createFileRoute } from '@tanstack/react-router';
import { MenuDimensions } from '#examples/dropdown/menuDimensions';

export const Route = createFileRoute('/components/dropdown/menuDimensions')({
  component: () => <MenuDimensions />,
  staticData: {
    title: 'Menu. Размеры',
    description: '',
  },
});
