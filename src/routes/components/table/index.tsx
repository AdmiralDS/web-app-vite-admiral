import { createFileRoute } from '@tanstack/react-router';
import { TableBasic } from '#examples/table';

export const Route = createFileRoute('/components/table/')({
  component: () => <TableBasic />,
  staticData: {
    title: 'Table. Базовый пример',
    description: `Небольшое описание функционала`,
  },
});
