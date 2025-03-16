import { createFileRoute } from '@tanstack/react-router';
import { TVariants } from '#examples/t/variants';

export const Route = createFileRoute('/components/t/variants')({
  component: () => <TVariants />,
  staticData: {
    title: 'T. Варианты использования',
  },
});
