import { createFileRoute } from '@tanstack/react-router';
import { IconPlacementSizes } from '#examples/iconPlacement/sizes';

export const Route = createFileRoute('/components/iconPlacement/sizes')({
  component: () => <IconPlacementSizes />,
  staticData: {
    title: 'IconPlacement. Размеры',
    description:
      'У компонента есть три размера иконки: L 24, M 20 и S 16. Причем, у размеров L и M два размера Hover-круга для различных ситуаций, чтобы вписываться внутрь небольших компонентов. БОльшие размеры круга обозначены в названии вариантов компонента как Big, малые — Small.',
  },
});
