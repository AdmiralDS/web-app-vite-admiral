import { createFileRoute } from '@tanstack/react-router';
import { ChipsSizes } from '#examples/chips/sizes';

export const Route = createFileRoute('/components/chips/sizes')({
  component: () => <ChipsSizes />,
  staticData: {
    title: 'Chips. Размеры',
    description: 'В зависимости от ситуации используются большие — 32 px, либо маленькие — 24 px чипсы.',
  },
});
