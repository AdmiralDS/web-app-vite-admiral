import { createFileRoute } from '@tanstack/react-router';
import { PaginationTwoEntries } from '#examples/paginationTwo/entries';

export const Route = createFileRoute('/components/paginationTwo/entries')({
  component: () => <PaginationTwoEntries />,
  staticData: {
    title: 'PaginationTwo. Количество записей',
  },
});
