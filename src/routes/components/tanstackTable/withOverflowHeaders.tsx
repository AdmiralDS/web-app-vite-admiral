import { createFileRoute } from '@tanstack/react-router';
import { WithOverflowHeaders } from '#examples/tanstackTable';

export const Route = createFileRoute('/components/tanstackTable/withOverflowHeaders')({
  component: () => <WithOverflowHeaders />,
  staticData: {
    title: 'TanstackTable.',
    description: `Пример с заголовками, уходящими в троеточие и тултипами.`,
  },
});
