import { createFileRoute } from '@tanstack/react-router';
import { CardTabMenuWithoutBorder } from '#examples/tabMenu/cardTabMenuWithoutBorder';

export const Route = createFileRoute('/components/tabMenu/cardTabMenuWithoutBorder')({
  component: () => <CardTabMenuWithoutBorder />,
  staticData: {
    title: 'CardTabMenu. Без обводки',
  },
});
