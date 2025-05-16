import { createFileRoute } from '@tanstack/react-router';
import { SuggestInputFilter } from '#examples/suggestInput/filter';

export const Route = createFileRoute('/components/suggestInput/filter')({
  component: () => <SuggestInputFilter />,
  staticData: {
    title: 'SuggestInput. Пример с фильтрацией',
  },
});
