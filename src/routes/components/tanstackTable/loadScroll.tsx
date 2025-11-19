import { createFileRoute } from '@tanstack/react-router';
import { LoadScrollExample } from '#examples/tanstackTable';

export const Route = createFileRoute('/components/tanstackTable/loadScroll')({
  component: () => <LoadScrollExample />,
  staticData: {
    title: 'TanstackTable.',
    description: `Пример с подзагрузкой данных при скролле.`,
  },
});
