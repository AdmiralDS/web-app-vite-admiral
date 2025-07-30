import { createFileRoute } from '@tanstack/react-router';
import { UserTableWithHiddenColumns } from '#examples/userTable/withHiddenColumnsTable';

export const Route = createFileRoute('/components/userTable/withHiddenColumnsTable')({
  component: () => <UserTableWithHiddenColumns />,
  staticData: {
    title: 'Table, разработанная пользователем (Андрей Поповский).',
    description: `Пример с hidden columns.`,
  },
});
