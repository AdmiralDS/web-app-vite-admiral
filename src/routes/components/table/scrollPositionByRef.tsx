import { createFileRoute } from '@tanstack/react-router';
import { TableScrollPositionByRef } from '#examples/table/scrollPositionByRef';

export const Route = createFileRoute('/components/table/scrollPositionByRef')({
  component: () => <TableScrollPositionByRef />,
  staticData: {
    title: 'Table. Управление позицией скролла через ref-атрибут',
  },
});
