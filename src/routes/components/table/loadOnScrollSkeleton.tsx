import { createFileRoute } from '@tanstack/react-router';
import { TableLoadOnScrollSkeleton } from '#examples/table/loadOnScrollSkeleton';

export const Route = createFileRoute('/components/table/loadOnScrollSkeleton')({
  component: () => <TableLoadOnScrollSkeleton />,
  staticData: {
    title: 'Table. Подгрузка данных при скролле со скелетоном',
  },
});
