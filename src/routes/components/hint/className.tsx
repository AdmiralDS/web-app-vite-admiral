import { createFileRoute } from '@tanstack/react-router';
import { HintClassName } from '#examples/hint/className';

export const Route = createFileRoute('/components/hint/className')({
  component: () => <HintClassName />,
  staticData: {
    title: 'Hint. ClassName',
    description: '',
  },
});
