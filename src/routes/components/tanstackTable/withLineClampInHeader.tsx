import { createFileRoute } from '@tanstack/react-router';
import { WithLineClampInHeader } from '#examples/tanstackTable';

export const Route = createFileRoute('/components/tanstackTable/withLineClampInHeader')({
  component: () => <WithLineClampInHeader />,
  staticData: {
    title: 'TanstackTable.',
    description: `Пример с headerLineClamp и headerExtraLineClamp.`,
  },
});
