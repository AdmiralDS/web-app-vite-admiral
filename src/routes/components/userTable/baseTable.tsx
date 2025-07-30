import { createFileRoute } from '@tanstack/react-router';
import { UserTableBase } from '#examples/userTable/baseTable';

export const Route = createFileRoute('/components/userTable/baseTable')({
  component: () => <UserTableBase />,
  staticData: {
    title: 'Table, разработанная пользователем (Андрей Поповский).',
    description: `Базовый пример.`,
  },
});
