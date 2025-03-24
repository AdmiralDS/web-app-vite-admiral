import { createFileRoute } from '@tanstack/react-router';
import { PaginationOneBasic } from '#examples/paginationOne';

export const Route = createFileRoute('/components/paginationOne/')({
  component: () => <PaginationOneBasic />,
  staticData: {
    title: 'PaginationOne. Базовый пример',
    description: 'Используется для навигации по длинным спискам, где информация разбивается на страницы.',
  },
});
