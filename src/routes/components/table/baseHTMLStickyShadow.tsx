import { createFileRoute } from '@tanstack/react-router';
import { TableBaseHTMLStickyShadow } from '#examples/table/baseHTMLStickyShadow';

export const Route = createFileRoute('/components/table/baseHTMLStickyShadow')({
  component: () => <TableBaseHTMLStickyShadow />,
  staticData: {
    title: 'Table. Базовый HTML table с фиксированными столбцами',
    description: `Пример минимальной стилизации html table с фиксированными столбцами выделенными с помощью тени.`,
  },
});
