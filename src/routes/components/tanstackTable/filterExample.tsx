import { createFileRoute } from '@tanstack/react-router';
import { FilterExample } from '#examples/tanstackTable/filterExample';

export const Route = createFileRoute('/components/tanstackTable/filterExample')({
  component: () => <FilterExample />,
  staticData: {
    title: 'TanstackTable.',
    description: `Пример с фильтрацией.`,
  },
});
