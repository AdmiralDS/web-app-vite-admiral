import { createFileRoute } from '@tanstack/react-router';
import { TextAreaSizes } from '#examples/textArea/sizes';

export const Route = createFileRoute('/components/textArea/sizes')({
  component: () => <TextAreaSizes />,
  staticData: {
    title: 'TextArea. Размеры',
    description: 'Компонент TextArea существует в 3 размерах S, M и XL',
  },
});
