import { createFileRoute } from '@tanstack/react-router';
import { SelectAsyncSearch } from '#examples/select/asyncSearch';

export const Route = createFileRoute('/components/select/asyncSearch')({
  component: () => <SelectAsyncSearch />,
  staticData: {
    title: 'mode = "searchSelect". Асинхронный поиск',
  },
});
