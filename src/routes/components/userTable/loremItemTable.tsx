import { createFileRoute } from '@tanstack/react-router';
import { UserTableLoremItem } from '#examples/userTable/loremItemTable';

export const Route = createFileRoute('/components/userTable/loremItemTable')({
  component: () => <UserTableLoremItem />,
  staticData: {
    title: 'Table, разработанная пользователем (Андрей Поповский).',
  },
});
