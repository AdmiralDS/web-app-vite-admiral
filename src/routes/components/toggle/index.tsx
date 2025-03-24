import { createFileRoute } from '@tanstack/react-router';
import { ToggleBase } from '#examples/toggle';

export const Route = createFileRoute('/components/toggle/')({
  component: () => <ToggleBase />,
  staticData: {
    title: 'Toggle. Базовый пример',
    description:
      'Переключатель используется в ситуации, когда нужно переключиться между двумя равнозначными состояними интерфейса.',
  },
});
