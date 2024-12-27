import { createFileRoute } from '@tanstack/react-router';
import { ExampleSection } from '../../-helpers/examples';
import { GlobalSearchWithLogic } from '../../-helpers/globalSearch';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

const queryClient = new QueryClient();

export const Template = () => {
  return (
    <>
      <ExampleSection text="Размер XL (56px)">
        <GlobalSearchWithLogic dimension="xl" />
      </ExampleSection>
      <ExampleSection text="Размер M (40px)">
        <GlobalSearchWithLogic dimension="m" />
      </ExampleSection>
      <ExampleSection text="Размер S (32px)">
        <GlobalSearchWithLogic dimension="s" />
      </ExampleSection>
    </>
  );
};

export const Route = createFileRoute('/components/globalSearch/sizes')({
  component: () => (
    <QueryClientProvider client={queryClient}>
      <Template />
    </QueryClientProvider>
  ),
  staticData: {
    title: 'GlobalSearch. Размеры',
    description: '',
  },
});
