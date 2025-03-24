import { createFileRoute } from '@tanstack/react-router';
import { PaginationOneSizes } from '#examples/paginationOne/sizes';

export const Route = createFileRoute('/components/paginationOne/sizes')({
  component: () => <PaginationOneSizes />,
  staticData: {
    title: 'PaginationOne. Размеры',
    description: '',
  },
});
