import { createFileRoute } from '@tanstack/react-router';
import { StickyColumnsExample } from '#examples/tanstackTable/stickyColumnsExample';

export const Route = createFileRoute('/components/tanstackTable/stickyColumnsExample')({
  component: () => <StickyColumnsExample />,
  staticData: {
    title: 'TanstackTable.',
    description: `Пример фиксированных колонок.`,
  },
});
