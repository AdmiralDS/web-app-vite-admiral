import { createFileRoute } from '@tanstack/react-router';
import { UserTableWithHorizontalScroll } from '#examples/userTable/withHorizontalScrollTable';

export const Route = createFileRoute('/components/userTable/withHorizontalScrollTable')({
  component: () => <UserTableWithHorizontalScroll />,
  staticData: {
    title: 'Table, разработанная пользователем (Андрей Поповский).',
    description: `Пример с горизонтальным скроллом.`,
  },
});
