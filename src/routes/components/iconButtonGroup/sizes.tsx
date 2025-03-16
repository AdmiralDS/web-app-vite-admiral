import { createFileRoute } from '@tanstack/react-router';
import { Sizes } from '#examples/iconButtonGroup/sizes';

export const Route = createFileRoute('/components/iconButtonGroup/sizes')({
  component: () => <Sizes />,
  staticData: {
    title: 'IconButtonGroup. Размеры',
    description: 'Есть 4 размера по аналогии с обычными кнопками: XL (56), L (48), M (40), S (32).',
  },
});
