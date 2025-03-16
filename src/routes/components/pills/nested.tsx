import { createFileRoute } from '@tanstack/react-router';
import { PillsNested } from '#examples/pills/nested';

export const Route = createFileRoute('/components/pills/nested')({
  component: () => <PillsNested />,
  staticData: {
    title: 'NestedPill. Двойные Pills',
    description: '',
  },
});
