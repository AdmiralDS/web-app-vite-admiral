import { createFileRoute } from '@tanstack/react-router';
import { IconPlacementStyles } from '#examples/iconPlacement/styles';

export const Route = createFileRoute('/components/iconPlacement/styles')({
  component: () => <IconPlacementStyles />,
  staticData: {
    title: 'IconPlacement. Стили',
    description: 'Два типа — Primary и Secondary. Можно окрашивать в произвольные цвета, например Error или Success.',
  },
});
