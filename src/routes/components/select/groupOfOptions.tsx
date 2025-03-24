import { createFileRoute } from '@tanstack/react-router';
import { SelectGroupOfOptions } from '#examples/select/groupOfOptions';

export const Route = createFileRoute('/components/select/groupOfOptions')({
  component: () => <SelectGroupOfOptions />,
  staticData: {
    title: 'Использование групп опций',
  },
});
