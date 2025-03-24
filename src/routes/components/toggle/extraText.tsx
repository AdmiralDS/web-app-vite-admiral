import { createFileRoute } from '@tanstack/react-router';
import { ToggleExtraText } from '#examples/toggle/extraText';

export const Route = createFileRoute('/components/toggle/extraText')({
  component: () => <ToggleExtraText />,
  staticData: {
    title: 'Toggle. Дополнительный текст',
    description: 'Варианты компонента с дополнительным текстом.',
  },
});
