import { createFileRoute } from '@tanstack/react-router';
import { GlobalSearchBasic } from '#examples/globalSearch';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

export const Route = createFileRoute('/components/globalSearch/')({
  component: () => (
    <QueryClientProvider client={queryClient}>
      <GlobalSearchBasic />
    </QueryClientProvider>
  ),
  staticData: {
    title: 'GlobalSearch. Базовый пример',
    description:
      'Компонент глобального поиска используется для поиска релевантных значений по введенному запросу. Используется, например,  для поиска по сайту. Как правило, располагается в верхней части страницы или шапке сайта, как один из главных элементов взаимодействия. Минимальная ширина 280px.',
  },
});
