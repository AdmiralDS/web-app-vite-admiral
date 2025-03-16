import { createFileRoute } from '@tanstack/react-router';
import { MultiLevelMenu } from '#examples/menuButton/multiLevelMenu';

export const Route = createFileRoute('/components/menuButton/multiLevelMenu')({
  component: () => <MultiLevelMenu />,
  staticData: {
    title: 'MenuButton. С многоуровневым меню',
    description: '',
  },
});
