import { createFileRoute } from '@tanstack/react-router';
import { LoadScrollExample } from '#examples/tanstackTable/loadScroll';

export const Route = createFileRoute('/components/tanstackTable/loadScroll')({
  component: () => <LoadScrollExample />,
  staticData: {
    title: 'TanstackTable.',
    description: `Пример с подзагрузкой данных при скролле.`,
  },
});
