import { createFileRoute } from '@tanstack/react-router';
import { ButtonGroupSizes } from '#examples/buttonGroup/sizes';

export const Route = createFileRoute('/components/buttonGroup/sizes')({
  component: () => <ButtonGroupSizes />,
  staticData: {
    title: 'ButtonGroup. Размеры.',
    description: 'Представлен в размерах: XL - высота 56 px, L - высота 48 px, M - высота 40 px и S - высота 32 px.',
  },
});
