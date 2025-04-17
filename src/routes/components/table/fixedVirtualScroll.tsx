import { createFileRoute } from '@tanstack/react-router';
import { TableFixedVirtualScroll } from '#examples/table/fixedVirtualScroll';

export const Route = createFileRoute('/components/table/fixedVirtualScroll')({
  component: TableFixedVirtualScroll,
  staticData: {
    title: 'Table. Виртуальный скролл для строк с фиксированной высотой',
  },
});
