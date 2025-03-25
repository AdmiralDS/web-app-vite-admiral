import { createFileRoute } from '@tanstack/react-router';
import { MultiInputStatusExample } from '#examples/multiInput/status';

export const Route = createFileRoute('/components/multiInput/status')({
  component: () => <MultiInputStatusExample />,
  staticData: {
    title: 'MultiInput. Статусы',
  },
});
