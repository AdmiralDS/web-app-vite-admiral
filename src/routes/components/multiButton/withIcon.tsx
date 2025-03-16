import { createFileRoute } from '@tanstack/react-router';
import { WithIcon } from '#examples/multiButton/withIcon';

export const Route = createFileRoute('/components/multiButton/withIcon')({
  component: () => <WithIcon />,
  staticData: {
    title: 'MultiButton. С иконкой',
    description: '',
  },
});
