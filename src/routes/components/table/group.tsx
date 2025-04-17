import { createFileRoute } from '@tanstack/react-router';
import { TableGroup } from '#examples/table/group';

export const Route = createFileRoute('/components/table/group')({
  component: TableGroup,
  staticData: {
    title: 'Table. Пример с группировкой строк',
  },
});
