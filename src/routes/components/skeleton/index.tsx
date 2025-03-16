import { createFileRoute } from '@tanstack/react-router';
import { SkeletonBasic } from '#examples/skeleton';

export const Route = createFileRoute('/components/skeleton/')({
  component: () => <SkeletonBasic />,
  staticData: {
    title: 'Skeleton. Базовый пример',
  },
});
