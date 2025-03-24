import { createFileRoute } from '@tanstack/react-router';
import { ToggleSizes } from '#examples/toggle/sizes';

export const Route = createFileRoute('/components/toggle/sizes')({
  component: () => <ToggleSizes />,
  staticData: {
    title: 'Toggle. Размеры',
    description: '',
  },
});
