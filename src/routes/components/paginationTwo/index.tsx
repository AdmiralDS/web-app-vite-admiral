import { createFileRoute } from '@tanstack/react-router';
import { PaginationTwoBasic } from '#examples/paginationTwo';

export const Route = createFileRoute('/components/paginationTwo/')({
  component: () => <PaginationTwoBasic />,
  staticData: {
    title: 'PaginationTwo. Базовый пример',
    description: '',
  },
});
