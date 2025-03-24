import { createFileRoute } from '@tanstack/react-router';
import { MenuWithAddTextAndIcons } from '#examples/dropdown/menuWithAddTextAndIcons';

export const Route = createFileRoute('/components/dropdown/menuWithAddTextAndIcons')({
  component: () => <MenuWithAddTextAndIcons />,
  staticData: {
    title: 'Menu. С дополнительным текстом и иконками',
    description: 'Можно включить вариант с дополнительным текстом и иконкой',
  },
});
