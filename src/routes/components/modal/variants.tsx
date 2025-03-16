import { createFileRoute } from '@tanstack/react-router';
import { ModalVariants } from '#examples/modal/variants';

export const Route = createFileRoute('/components/modal/variants')({
  component: () => <ModalVariants />,
  staticData: {
    title: 'Modal. Наполнение',
    description: '',
  },
});
