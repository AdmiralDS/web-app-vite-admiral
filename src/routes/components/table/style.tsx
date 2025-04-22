import { createFileRoute } from '@tanstack/react-router';
import { TableStyle } from '#examples/table/style';

export const Route = createFileRoute('/components/table/style')({
  component: TableStyle,
  staticData: {
    title: 'Table. Пример стилизации компонента',
  },
});
