import { createFileRoute } from '@tanstack/react-router';
import { UserTableWithNoLastColumnName } from '#examples/userTable/withNoLastColumnNameTable';

export const Route = createFileRoute('/components/userTable/withNoLastColumnNameTable')({
  component: () => <UserTableWithNoLastColumnName />,
  staticData: {
    title: 'Table, разработанная пользователем (Андрей Поповский).',
    description: `Пример с no last column name.`,
  },
});
