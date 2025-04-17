import { createFileRoute } from '@tanstack/react-router';
import { TableDynamicVirtualScroll } from '#examples/table/dynamicVirtualScroll';

export const Route = createFileRoute('/components/table/dynamicVirtualScroll')({
  component: TableDynamicVirtualScroll,
  staticData: {
    title: 'Table. Виртуальный скролл для строк с динамической высотой',
  },
});
