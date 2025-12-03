import { createFileRoute } from '@tanstack/react-router';
import { LoadScrollSpinnerExample } from '#examples/tanstackTable';

export const Route = createFileRoute('/components/tanstackTable/loadScrollSpinner')({
  component: () => <LoadScrollSpinnerExample />,
  staticData: {
    title: 'TanstackTable.',
    description: `Пример с подзагрузкой данных при скролле со спиннером.`,
  },
});
