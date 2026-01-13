import { createFileRoute } from '@tanstack/react-router';
import { BaseExample } from '#examples/tanstackTable';

export const Route = createFileRoute('/components/tanstackTable/')({
  component: () => <BaseExample />,
  staticData: {
    title: 'TanstackTable.',
    description: `Базовый пример.`,
  },
});
