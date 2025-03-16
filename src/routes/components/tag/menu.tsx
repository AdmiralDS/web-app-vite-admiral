import { createFileRoute } from '@tanstack/react-router';
import { TagMenuExample } from '#examples/tag/menu';

export const Route = createFileRoute('/components/tag/menu')({
  component: () => <TagMenuExample />,
  staticData: {
    title: 'TagMenu. С выпадающим меню',
    description: 'Вариант тэгов, который нужен для принудительного выбора статуса из выпадающего меню.',
  },
});
