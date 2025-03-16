import { createFileRoute } from '@tanstack/react-router';
import { TableBaseHTML } from '#examples/table/baseHTML';

export const Route = createFileRoute('/components/table/baseHTML')({
  component: () => <TableBaseHTML />,
  staticData: {
    title: 'Table. Базовый HTML table',
    description: `Пример минимальной стилизации html table с фиксированной шапкой при вертикальном скроле.`,
  },
});
