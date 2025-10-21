import { createFileRoute } from '@tanstack/react-router';
import { WithOverflowMenu } from '#examples/tanstackTable';

export const Route = createFileRoute('/components/tanstackTable/overflowMenu')({
  component: () => <WithOverflowMenu />,
  staticData: {
    title: 'TanstackTable.',
    description: `Пример с OverflowMenu и иконками одиночных действий.`,
  },
});
