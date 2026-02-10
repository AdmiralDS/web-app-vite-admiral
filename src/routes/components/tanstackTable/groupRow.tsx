import { createFileRoute } from '@tanstack/react-router';
import { GroupRowExample } from '#examples/tanstackTable/groupRow';

export const Route = createFileRoute('/components/tanstackTable/groupRow')({
  component: () => <GroupRowExample />,
  staticData: {
    title: 'TanstackTable.',
    description: `Пример с группировкой строк.`,
  },
});
