import { createFileRoute } from '@tanstack/react-router';
import { TextButtonStyles } from '#examples/textButton/styles';

export const Route = createFileRoute('/components/textButton/styles')({
  component: () => <TextButtonStyles />,
  staticData: {
    title: 'TextButton. Размеры и стили',
    description: 'Существует в двух размерах (M, S) и стилях (primary, secondary).',
  },
});
