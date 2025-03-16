import { createFileRoute } from '@tanstack/react-router';
import { PillsBasic } from '#examples/pills';

export const Route = createFileRoute('/components/pills/')({
  component: () => <PillsBasic />,
  staticData: {
    title: 'Pills. Базовый пример',
    description: '',
  },
});
