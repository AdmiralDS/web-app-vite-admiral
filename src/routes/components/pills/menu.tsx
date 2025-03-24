import { createFileRoute } from '@tanstack/react-router';
import { PillsMenu } from '#examples/pills/menu';

export const Route = createFileRoute('/components/pills/menu')({
  component: () => <PillsMenu />,
  staticData: {
    title: 'PillMenu. С выпадающим меню',
    description: '',
  },
});
