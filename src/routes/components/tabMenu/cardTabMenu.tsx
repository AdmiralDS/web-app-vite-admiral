import { createFileRoute } from '@tanstack/react-router';
import { CardTabMenu } from '#examples/tabMenu/cardTabMenu';

export const Route = createFileRoute('/components/tabMenu/cardTabMenu')({
  component: () => <CardTabMenu />,
  staticData: {
    title: 'CardTabMenu. Базовый пример',
  },
});
