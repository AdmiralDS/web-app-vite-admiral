import { createFileRoute } from '@tanstack/react-router';
import { ListMultiline } from '#examples/list/multiline';

export const Route = createFileRoute('/components/list/multiline')({
  component: () => <ListMultiline />,
  staticData: {
    title: 'List. Многострочность и регулировка ширины списка',
    description:
      'Пользователь может настроить необходимую ширину компонента самостоятельно, например, через атрибут style. По умолчанию компонент подстраивается под размеры родительского элемента.',
  },
});
