import { createFileRoute } from '@tanstack/react-router';
import { TBasic } from '#examples/t';

export const Route = createFileRoute('/components/t/')({
  component: () => <TBasic />,
  staticData: {
    title: 'T. Базовый пример',
  },
});
