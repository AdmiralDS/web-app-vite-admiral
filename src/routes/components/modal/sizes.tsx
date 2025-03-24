import { createFileRoute } from '@tanstack/react-router';
import { ModalSizes } from '#examples/modal/sizes';

export const Route = createFileRoute('/components/modal/sizes')({
  component: () => <ModalSizes />,
  staticData: {
    title: 'Modal. Размеры',
    description: '',
  },
});
