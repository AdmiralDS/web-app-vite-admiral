import { createFileRoute } from '@tanstack/react-router';
import { InputExCustom } from '#examples/inputEx/custom';

export const Route = createFileRoute('/components/inputEx/custom')({
  component: () => <InputExCustom />,
  staticData: {
    title: 'InputEx. Custom',
  },
});
