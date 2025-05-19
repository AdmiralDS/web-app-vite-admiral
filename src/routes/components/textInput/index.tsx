import { createFileRoute } from '@tanstack/react-router';
import { TextInputBasic } from '#examples/textInput';

export const Route = createFileRoute('/components/textInput/')({
  component: () => <TextInputBasic />,
  staticData: {
    title: 'TextInput. Базовый пример',
  },
});
