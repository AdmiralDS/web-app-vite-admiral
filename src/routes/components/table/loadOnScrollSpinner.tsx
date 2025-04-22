import { createFileRoute } from '@tanstack/react-router';
import { TableLoadOnScrollSpinner } from '#examples/table/loadOnScrollSpinner';

export const Route = createFileRoute('/components/table/loadOnScrollSpinner')({
  component: () => <TableLoadOnScrollSpinner />,
  staticData: {
    title: 'Table. Подгрузка данных при скролле со спиннером',
  },
});
