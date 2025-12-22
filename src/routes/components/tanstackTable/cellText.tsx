import { createFileRoute } from '@tanstack/react-router';
import { CellTextExample } from '#examples/tanstackTable';

export const Route = createFileRoute('/components/tanstackTable/cellText')({
  component: () => <CellTextExample />,
  staticData: {
    title: 'TanstackTable.',
    description: `Контент ячеек.`,
  },
});
