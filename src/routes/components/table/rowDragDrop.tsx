import { createFileRoute } from '@tanstack/react-router';
import { TableRowDragDrop } from '#examples/table/rowDragDrop';

export const Route = createFileRoute('/components/table/rowDragDrop')({
  component: TableRowDragDrop,
  staticData: {
    title: 'Table. Drag&Drop строк',
  },
});
