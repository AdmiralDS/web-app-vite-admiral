import { createFileRoute } from '@tanstack/react-router';
import { TableRenderCallback } from '#examples/table/renderCallback';

export const Route = createFileRoute('/components/table/renderCallback')({
  component: TableRenderCallback,
  staticData: {
    title: 'Table. Пример использования render-колбеков (renderCell, renderGroupTitle)',
  },
});
