import { createFileRoute } from '@tanstack/react-router';
import { WithExtraTextInHeader } from '#examples/tanstackTable/withExtraTextInHeader';

export const Route = createFileRoute('/components/tanstackTable/withExtraTextInHeader')({
  component: () => <WithExtraTextInHeader />,
  staticData: {
    title: 'TanstackTable.',
    description: `Пример с дополнительным текстом в заголовках.`,
  },
});
