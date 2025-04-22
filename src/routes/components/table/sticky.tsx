import { createFileRoute } from '@tanstack/react-router';
import { TableStickyColumns } from '#examples/table/sticky';

export const Route = createFileRoute('/components/table/sticky')({
  component: TableStickyColumns,
  staticData: {
    title: 'Table. Фиксированные столбцы',
  },
});
