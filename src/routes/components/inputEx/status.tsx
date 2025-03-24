import { createFileRoute } from '@tanstack/react-router';
import { InputExStatus } from '#examples/inputEx/status';

export const Route = createFileRoute('/components/inputEx/status')({
  component: () => <InputExStatus />,
  staticData: {
    title: 'InputEx. Статусы',
  },
});
