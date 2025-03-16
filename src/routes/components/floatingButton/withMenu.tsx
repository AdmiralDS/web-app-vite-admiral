import { createFileRoute } from '@tanstack/react-router';
import { FloatingButtonWithMenu } from '#examples/floatingButton/withMenu';

export const Route = createFileRoute('/components/floatingButton/withMenu')({
  component: () => <FloatingButtonWithMenu />,
  staticData: {
    title: 'FloatingButtonMenu.',
    description: '',
  },
});
