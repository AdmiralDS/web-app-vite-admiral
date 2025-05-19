import { createFileRoute } from '@tanstack/react-router';
import { TextInputVariants } from '#examples/textInput/variants';

export const Route = createFileRoute('/components/textInput/variants')({
  component: () => <TextInputVariants />,
  staticData: {
    title: 'TextInput. Варианты использования',
  },
});
