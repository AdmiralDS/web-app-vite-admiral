import { createFileRoute } from '@tanstack/react-router';
import { TextInputState } from '#examples/textInput/states';

export const Route = createFileRoute('/components/textInput/states')({
  component: () => <TextInputState />,
  staticData: {
    title: 'TextInput. Состояния',
  },
});
