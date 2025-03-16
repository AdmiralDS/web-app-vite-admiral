import { createFileRoute } from '@tanstack/react-router';
import { PaginationTwoWithInput } from '#examples/paginationTwo/withInput';

export const Route = createFileRoute('/components/paginationTwo/withInput')({
  component: () => <PaginationTwoWithInput />,
  staticData: {
    title: 'PaginationTwo. Ввод номера страницы вручную',
  },
});
