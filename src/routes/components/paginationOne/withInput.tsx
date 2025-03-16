import { createFileRoute } from '@tanstack/react-router';
import { PaginationOneWithInput } from '#examples/paginationOne/withInput';

export const Route = createFileRoute('/components/paginationOne/withInput')({
  component: () => <PaginationOneWithInput />,
  staticData: {
    title: 'PaginationOne. Опция ввода номера страницы через Input',
    description: '',
  },
});
