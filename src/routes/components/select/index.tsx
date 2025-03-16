import { createFileRoute } from '@tanstack/react-router';
import { SelectBasic } from '#examples/select';

export const Route = createFileRoute('/components/select/')({
  component: () => <SelectBasic />,
  staticData: {
    title: 'Select. Базовый пример',
  },
});
