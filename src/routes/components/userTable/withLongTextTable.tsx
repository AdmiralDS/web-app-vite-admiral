import { createFileRoute } from '@tanstack/react-router';
import { UserTableWithLongText } from '#examples/userTable/withLongTextTable';

export const Route = createFileRoute('/components/userTable/withLongTextTable')({
  component: () => <UserTableWithLongText />,
  staticData: {
    title: 'Table, разработанная пользователем (Андрей Поповский).',
    description: `Базовый пример с длинным текстом.`,
  },
});
