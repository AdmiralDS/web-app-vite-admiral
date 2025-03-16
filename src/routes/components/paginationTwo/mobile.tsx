import { createFileRoute } from '@tanstack/react-router';
import { PaginationTwoMobile } from '#examples/paginationTwo/mobile';

export const Route = createFileRoute('/components/paginationTwo/mobile')({
  component: () => <PaginationTwoMobile />,
  staticData: {
    title: 'PaginationTwo. Мобильная версия',
  },
});
