import { createFileRoute } from '@tanstack/react-router';
import { MenuCustomItems } from '#examples/dropdown/menuCustomItems';

export const Route = createFileRoute('/components/dropdown/menuCustomItems')({
  component: () => <MenuCustomItems />,
  staticData: {
    title: 'Menu. Кастомные пункты меню',
    description:
      'В случаях, когда стандартного функционала пунктов меню не хватает для ваших задач, можно использовать кастомное наполнение',
  },
});
