import { createFileRoute } from '@tanstack/react-router';
import { AnchorSizes } from '#examples/anchor/sizes';

export const Route = createFileRoute('/components/anchor/sizes')({
  component: () => <AnchorSizes />,
  staticData: {
    title: 'Anchor. Размеры',
    description: 'Компонент представлен в 2 размерах 24px (s) и 28px (m)',
  },
});
