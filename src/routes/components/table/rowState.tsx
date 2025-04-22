import { createFileRoute } from '@tanstack/react-router';
import { TableRowState } from '#examples/table/rowState';

export const Route = createFileRoute('/components/table/rowState')({
  component: TableRowState,
  staticData: {
    title: 'Table. Состояния (selected, disabled, hover) и статусы (error, success, кастомные статусы) строк.',
  },
});
