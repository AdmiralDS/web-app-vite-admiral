import { createFileRoute } from '@tanstack/react-router';
import { ResizeExample } from '#examples/tanstackTable';

export const Route = createFileRoute('/components/tanstackTable/resizeExample')({
  component: () => <ResizeExample />,
  staticData: {
    title: 'TanstackTable.',
    description: `Пример с ресайзом колонок.`,
  },
});
