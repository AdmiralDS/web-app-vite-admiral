import { createFileRoute } from '@tanstack/react-router';
import { TableLoadOnScroll } from '#examples/table/loadOnScroll';

export const Route = createFileRoute('/components/table/loadOnScroll')({
  component: () => <TableLoadOnScroll />,
  staticData: {
    title: 'Table. Подгрузка данных при скролле',
  },
});
