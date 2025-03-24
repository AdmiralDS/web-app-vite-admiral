import { createFileRoute } from '@tanstack/react-router';
import { PaginationTwoState } from '#examples/paginationTwo/state';

export const Route = createFileRoute('/components/paginationTwo/state')({
  component: () => <PaginationTwoState />,
  staticData: {
    title: 'PaginationTwo. Состояния',
  },
});
