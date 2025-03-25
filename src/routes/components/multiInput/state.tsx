import { createFileRoute } from '@tanstack/react-router';
import { MultiInputStateExample } from '#examples/multiInput/state';

export const Route = createFileRoute('/components/multiInput/state')({
  component: () => <MultiInputStateExample />,
  staticData: {
    title: 'MultiInput. Состояния',
  },
});
