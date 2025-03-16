import { createFileRoute } from '@tanstack/react-router';
import { TableBaseHTMLOverflowMenu } from '#examples/table/baseHTMLOverflowMenu';

export const Route = createFileRoute('/components/table/baseHTMLOverflowMenu')({
  component: () => <TableBaseHTMLOverflowMenu />,
  staticData: {
    title: 'Table. Базовый HTML table с Overflow Menu',
    description: `Пример минимальной стилизации html table с Overflow Menu.`,
  },
});
