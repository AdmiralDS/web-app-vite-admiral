import { createFileRoute } from '@tanstack/react-router';
import { DividerType } from '#examples/divider/type';

export const Route = createFileRoute('/components/divider/type')({
  component: () => <DividerType />,
  staticData: {
    title: 'Divider. Тип (orientation)',
  },
});
