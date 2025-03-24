import { createFileRoute } from '@tanstack/react-router';
import { GlobalSearchSizes } from '#examples/globalSearch/sizes';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

const queryClient = new QueryClient();

export const Route = createFileRoute('/components/globalSearch/sizes')({
  component: () => (
    <QueryClientProvider client={queryClient}>
      <GlobalSearchSizes />
    </QueryClientProvider>
  ),
  staticData: {
    title: 'GlobalSearch. Размеры',
    description: '',
  },
});
