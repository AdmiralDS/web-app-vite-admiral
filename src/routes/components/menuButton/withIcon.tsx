import { createFileRoute } from '@tanstack/react-router';
import { WithIcon } from '#examples/menuButton/withIcon';

export const Route = createFileRoute('/components/menuButton/withIcon')({
  component: () => <WithIcon />,
  staticData: {
    title: 'MenuButton. С иконкой',
    description: '',
  },
});
