import { createFileRoute } from '@tanstack/react-router';
import { TextButtonMenuStyles } from '#examples/textButtonMenu/styles';

export const Route = createFileRoute('/components/textButtonMenu/styles')({
  component: () => <TextButtonMenuStyles />,
  staticData: {
    title: 'TextButtonMenu. Размеры и стили',
    description: 'Существует в двух размерах (M, S) и стилях (primary, secondary).',
  },
});
