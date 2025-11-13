import { createFileRoute } from '@tanstack/react-router';
import { DynamicVirtualScroll } from '#examples/tanstackTable';

export const Route = createFileRoute('/components/tanstackTable/dynamicVirtualScroll')({
  component: () => <DynamicVirtualScroll />,
  staticData: {
    title: 'TanstackTable.',
    description: `Пример виртуального скролла с динамической высотой строки.`,
  },
});
