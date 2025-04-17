import { createFileRoute } from '@tanstack/react-router';
import { TableWidth } from '#examples/table/width';

export const Route = createFileRoute('/components/table/width')({
  component: TableWidth,
  staticData: {
    title: 'Table. Пример изменения ширины столбцов',
  },
});
