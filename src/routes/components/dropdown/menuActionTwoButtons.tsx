import { createFileRoute } from '@tanstack/react-router';
import { MenuActionTwoButtons } from '#examples/dropdown/menuActionTwoButtons';

export const Route = createFileRoute('/components/dropdown/menuActionTwoButtons')({
  component: () => <MenuActionTwoButtons />,
  staticData: {
    title: 'Menu. Пример с Actions с двумя кнопками',
    description: '',
  },
});
