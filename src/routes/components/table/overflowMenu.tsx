import { createFileRoute } from '@tanstack/react-router';
import { TableOverflowMenu } from '#examples/table/overflowMenu';

export const Route = createFileRoute('/components/table/overflowMenu')({
  component: TableOverflowMenu,
  staticData: {
    title: 'Table. Пример строк с OverflowMenu и иконками одиночных действий',
  },
});
