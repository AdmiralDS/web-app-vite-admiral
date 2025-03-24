import { createFileRoute } from '@tanstack/react-router';
import { InputExBasic } from '#examples/inputEx';

export const Route = createFileRoute('/components/inputEx/')({
  component: () => <InputExBasic />,
  staticData: {
    title: 'InputEx. Базовый пример',
  },
});
