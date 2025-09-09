import { createFileRoute } from '@tanstack/react-router';
import { ZebraExample } from '#examples/tanstackTable';

export const Route = createFileRoute('/components/tanstackTable/zebraExample')({
  component: () => <ZebraExample />,
  staticData: {
    title: 'TanstackTable.',
    description: `Зебра (окрашивание строк через одну).`,
  },
});
