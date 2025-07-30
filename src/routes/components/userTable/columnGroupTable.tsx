import { createFileRoute } from '@tanstack/react-router';
import { UserTableColumnGroup } from '#examples/userTable/columnGroupTable';

export const Route = createFileRoute('/components/userTable/columnGroupTable')({
  component: () => <UserTableColumnGroup />,
  staticData: {
    title: 'Table, разработанная пользователем (Андрей Поповский).',
    description: `Пример с column group.`,
  },
});
