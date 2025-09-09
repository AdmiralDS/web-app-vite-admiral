import { createFileRoute } from '@tanstack/react-router';
import { ExpandedRow } from '#examples/tanstackTable';

export const Route = createFileRoute('/components/tanstackTable/expandedRow')({
  component: () => <ExpandedRow />,
  staticData: {
    title: 'TanstackTable.',
    description: `Пример c детализацией строки.`,
  },
});
