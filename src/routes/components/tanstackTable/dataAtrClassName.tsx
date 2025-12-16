import { createFileRoute } from '@tanstack/react-router';
import { DataAtrClassNameExample } from '#examples/tanstackTable';

export const Route = createFileRoute('/components/tanstackTable/dataAtrClassName')({
  component: () => <DataAtrClassNameExample />,
  staticData: {
    title: 'TanstackTable.',
    description: `Пример с описанием classNames и data - атрибутов.`,
  },
});
