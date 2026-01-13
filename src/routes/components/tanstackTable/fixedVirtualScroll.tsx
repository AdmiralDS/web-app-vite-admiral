import { createFileRoute } from '@tanstack/react-router';
import { FixedVirtualScrollExample } from '#examples/tanstackTable/fixedVirtualScroll';

export const Route = createFileRoute('/components/tanstackTable/fixedVirtualScroll')({
  component: () => <FixedVirtualScrollExample />,
  staticData: {
    title: 'TanstackTable.',
    description: `Пример виртуального скролла с фиксированной высотой строки.`,
  },
});
