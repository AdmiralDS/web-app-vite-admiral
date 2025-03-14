import { createFileRoute } from '@tanstack/react-router';
import { MenuCategories } from '#examples/dropdown/menuCategories';

export const Route = createFileRoute('/components/dropdown/menuCategories')({
  component: () => <MenuCategories />,
  staticData: {
    title: 'Menu. Категории',
    description: 'Используются для визуального и логического разделения списка опций в выпадающем меню',
  },
});
