import { createFileRoute } from '@tanstack/react-router';
import { TextInputControlled } from '#examples/textInput/controlled';

export const Route = createFileRoute('/components/textInput/controlled')({
  component: () => <TextInputControlled />,
  staticData: {
    title: 'TextInput. Контроллируемый инпут',
  },
});
