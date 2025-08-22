import { createFileRoute } from '@tanstack/react-router';
import { RowSelection } from '#examples/tanstackTable';

export const Route = createFileRoute('/components/tanstackTable/rowSelection')({
  component: () => <RowSelection />,
  staticData: {
    title: 'TanstackTable.',
    description: `Пример с выбором строк`,
  },
});
