import { createFileRoute } from '@tanstack/react-router';
import { PaginationTwoPages } from '#examples/paginationTwo/pages';

export const Route = createFileRoute('/components/paginationTwo/pages')({
  component: () => <PaginationTwoPages />,
  staticData: {
    title: 'PaginationTwo. Количество страниц',
  },
});
