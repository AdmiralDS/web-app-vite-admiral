import { createFileRoute } from '@tanstack/react-router';
import { PaginationOneTypes } from '#examples/paginationOne/types';

export const Route = createFileRoute('/components/paginationOne/types')({
  component: () => <PaginationOneTypes />,
  staticData: {
    title: 'PaginationOne. Типы',
    description: '',
  },
});
