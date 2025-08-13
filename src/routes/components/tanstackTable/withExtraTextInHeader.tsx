import { createFileRoute } from '@tanstack/react-router';
import { WithExtraTextInHeader } from '#examples/tanstackTable';

export const Route = createFileRoute('/components/tanstackTable/withExtraTextInHeader')({
  component: () => <WithExtraTextInHeader />,
  staticData: {
    title: 'TanstackTable.',
    description: `Пример с дополнительным текстом в заголовках`,
  },
});
