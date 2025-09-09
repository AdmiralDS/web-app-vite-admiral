import { createFileRoute } from '@tanstack/react-router';
import { GroupHeaders } from '#examples/tanstackTable';

export const Route = createFileRoute('/components/tanstackTable/groupHeaders')({
  component: () => <GroupHeaders />,
  staticData: {
    title: 'TanstackTable.',
    description: `Пример с многоуровневыми заголовками.`,
  },
});
