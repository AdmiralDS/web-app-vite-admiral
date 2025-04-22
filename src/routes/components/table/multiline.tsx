import { createFileRoute } from '@tanstack/react-router';
import { TableMultiLine } from '#examples/table/multiline';

export const Route = createFileRoute('/components/table/multiline')({
  component: TableMultiLine,
  staticData: {
    title: 'Table. Пример многострочности',
  },
});
