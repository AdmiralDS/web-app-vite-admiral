import { createFileRoute } from '@tanstack/react-router';
import { TextInputWithIcon } from '#examples/textInput/withIcon';

export const Route = createFileRoute('/components/textInput/withIcon')({
  component: () => <TextInputWithIcon />,
  staticData: {
    title: 'TextInput. С иконками',
  },
});
