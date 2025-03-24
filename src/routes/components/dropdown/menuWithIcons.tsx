import { createFileRoute } from '@tanstack/react-router';
import { MenuWithIcons } from '#examples/dropdown/menuWithIcons';

export const Route = createFileRoute('/components/dropdown/menuWithIcons')({
  component: () => <MenuWithIcons />,
  staticData: {
    title: 'Menu. С иконками',
    description: '',
  },
});
