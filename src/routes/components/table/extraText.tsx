import { createFileRoute } from '@tanstack/react-router';
import { TableExtraText } from '#examples/table/extraText';

export const Route = createFileRoute('/components/table/extraText')({
  component: TableExtraText,
  staticData: {
    title: 'Table. Пример с дополнительным текстом в заголовке',
  },
});
