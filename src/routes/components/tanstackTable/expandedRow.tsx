import { createFileRoute } from '@tanstack/react-router';
import { ExpandedRow } from '#examples/tanstackTable/expandedRow';

export const Route = createFileRoute('/components/tanstackTable/expandedRow')({
  component: () => <ExpandedRow />,
  staticData: {
    title: 'TanstackTable.',
    description: `Пример c детализацией строки.`,
  },
});
