import { createFileRoute } from '@tanstack/react-router';
import { GlobalSearchVariants } from '#examples/globalSearch/variants';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

const queryClient = new QueryClient();

export const Route = createFileRoute('/components/globalSearch/variants')({
  component: () => (
    <QueryClientProvider client={queryClient}>
      <GlobalSearchVariants />
    </QueryClientProvider>
  ),
  staticData: {
    title: 'GlobalSearch. Варианты',
    description: '',
  },
});
