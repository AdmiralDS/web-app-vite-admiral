import { createFileRoute } from '@tanstack/react-router';
import { TableZebra } from '#examples/table/zebra';

export const Route = createFileRoute('/components/table/zebra')({
  component: TableZebra,
  staticData: {
    title: 'Table. Зебра (окрашивание строк через одну)',
  },
});
