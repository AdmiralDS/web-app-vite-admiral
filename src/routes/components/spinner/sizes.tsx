import { createFileRoute } from '@tanstack/react-router';
import { SpinnerSizes } from '#examples/spinner/sizes';

export const Route = createFileRoute('/components/spinner/sizes')({
  component: () => <SpinnerSizes />,
  staticData: {
    title: 'Spinner. Размеры',
    description: 'Существует в пяти размерах - 16px (s), 20px (ms), 24px (m), 48px (l) и 64px (xl)',
  },
});
