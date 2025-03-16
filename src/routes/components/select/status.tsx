import { createFileRoute } from '@tanstack/react-router';
import { SelectStatus } from '#examples/select/status';

export const Route = createFileRoute('/components/select/status')({
  component: () => <SelectStatus />,
  staticData: {
    title: 'Select. Статусы',
  },
});
