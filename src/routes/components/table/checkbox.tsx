import { createFileRoute } from '@tanstack/react-router';
import { TableCheckbox } from '#examples/table/checkbox';

export const Route = createFileRoute('/components/table/checkbox')({
  component: TableCheckbox,
  staticData: {
    title: 'Table. Пример с чекбоксами',
  },
});
