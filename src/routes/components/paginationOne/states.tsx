import { createFileRoute } from '@tanstack/react-router';
import { PaginationOneStates } from '#examples/paginationOne/states';

export const Route = createFileRoute('/components/paginationOne/states')({
  component: () => <PaginationOneStates />,
  staticData: {
    title: 'PaginationOne. Состояния',
    description: '',
  },
});
