import { createFileRoute } from '@tanstack/react-router';
import { UserTableBenchmark } from '#examples/userTable/benchmarkTable';

export const Route = createFileRoute('/components/userTable/benchmarkTable')({
  component: () => <UserTableBenchmark />,
  staticData: {
    title: 'Table, разработанная пользователем (Андрей Поповский).',
    description: `Пример с большим объёмом данных.`,
  },
});
