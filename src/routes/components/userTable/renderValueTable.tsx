import { createFileRoute } from '@tanstack/react-router';
import { UserTableRenderValue } from '#examples/userTable/renderValueTable';

export const Route = createFileRoute('/components/userTable/renderValueTable')({
  component: () => <UserTableRenderValue />,
  staticData: {
    title: 'Table, разработанная пользователем (Андрей Поповский).',
    description: `Use "renderValue" to render a custom cell story.`,
  },
});
