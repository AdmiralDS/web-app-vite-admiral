import { createFileRoute } from '@tanstack/react-router';
import { SelectState } from '#examples/select/state';

export const Route = createFileRoute('/components/select/state')({
  component: () => <SelectState />,
  staticData: {
    title: 'Select. Состояния',
  },
});
