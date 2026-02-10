import { createFileRoute } from '@tanstack/react-router';
import { DataAtrClassNameExample } from '#examples/tanstackTable/dataAtrClassName';

export const Route = createFileRoute('/components/tanstackTable/dataAtrClassName')({
  component: () => <DataAtrClassNameExample />,
  staticData: {
    title: 'TanstackTable.',
    description: `Описание поддерживаемых classNames и data-атрибутов.`,
  },
});
