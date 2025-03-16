import { createFileRoute } from '@tanstack/react-router';
import { InputExState } from '#examples/inputEx/state';

export const Route = createFileRoute('/components/inputEx/state')({
  component: () => <InputExState />,
  staticData: {
    title: 'InputEx. Состояния',
  },
});
