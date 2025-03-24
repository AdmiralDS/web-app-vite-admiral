import { createFileRoute } from '@tanstack/react-router';
import { TableBaseHTMLMultiLevelHeader } from '#examples/table/multiLevelHeader';

export const Route = createFileRoute('/components/table/multiLevelHeader')({
  component: () => <TableBaseHTMLMultiLevelHeader />,
  staticData: {
    title: 'Table. Multi-Level Header',
    description:
      'В случаях сложной иерархии в заголовках таблицы, можно применять многоуровневую структуру Multi-Level Header.',
  },
});
