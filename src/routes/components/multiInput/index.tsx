import { createFileRoute } from '@tanstack/react-router';
import { MultiInputExample } from '#examples/multiInput';

export const Route = createFileRoute('/components/multiInput/')({
  component: () => <MultiInputExample />,
  staticData: {
    title: 'MultiInput. Базовый пример',
  },
});
