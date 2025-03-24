import { createFileRoute } from '@tanstack/react-router';
import { MenuManyItems } from '#examples/dropdown/menuManyItems';

export const Route = createFileRoute('/components/dropdown/menuManyItems')({
  component: () => <MenuManyItems />,
  staticData: {
    title: 'Menu. Пример с большим количеством item',
    description: 'Для проверки прокрутки меню при быстрой смене активного элемента.',
  },
});
