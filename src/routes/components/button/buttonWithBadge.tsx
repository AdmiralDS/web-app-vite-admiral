import { createFileRoute } from '@tanstack/react-router';
import { ButtonWithBadge } from '#examples/button/buttonWithBadge';

export const Route = createFileRoute('/components/button/buttonWithBadge')({
  component: () => <ButtonWithBadge />,
  staticData: {
    title: 'Button с бейджем',
    description: '',
  },
});
