import { createFileRoute } from '@tanstack/react-router';
import { MenuActionSearch } from '#examples/dropdown/menuActionSearch';

export const Route = createFileRoute('/components/dropdown/menuActionSearch')({
  component: () => <MenuActionSearch />,
  staticData: {
    title: 'Menu. Пример с Actions и Search',
    description: '',
  },
});
