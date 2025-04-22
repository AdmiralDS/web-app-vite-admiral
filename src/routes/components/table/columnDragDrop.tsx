import { createFileRoute } from '@tanstack/react-router';
import { TableColumnDragDrop } from '#examples/table/columnDragDrop';

export const Route = createFileRoute('/components/table/columnDragDrop')({
  component: TableColumnDragDrop,
  staticData: {
    title: 'Table. Drag&Drop столбцов',
  },
});
