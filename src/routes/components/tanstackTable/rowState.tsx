import { createFileRoute } from '@tanstack/react-router';
import { RowState } from '#examples/tanstackTable/rowState';

export const Route = createFileRoute('/components/tanstackTable/rowState')({
  component: () => <RowState />,
  staticData: {
    title: 'TanstackTable.',
    description: `Пример различными состояниями строк.`,
  },
});
