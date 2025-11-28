import { createFileRoute } from '@tanstack/react-router';
import { LoadScrollSkeletonExample } from '#examples/tanstackTable';

export const Route = createFileRoute('/components/tanstackTable/loadScrollSkeleton')({
  component: () => <LoadScrollSkeletonExample />,
  staticData: {
    title: 'TanstackTable.',
    description: `Пример с подзагрузкой данных при скролле со скелетоном.`,
  },
});
