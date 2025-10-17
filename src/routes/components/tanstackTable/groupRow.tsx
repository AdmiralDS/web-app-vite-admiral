import { createFileRoute } from '@tanstack/react-router';
import { GroupRowExample } from '#examples/tanstackTable';

export const Route = createFileRoute('/components/tanstackTable/groupRow')({
  component: () => <GroupRowExample />,
  staticData: {
    title: 'TanstackTable.',
    description: `Пример с группировкой строк.`,
  },
});
