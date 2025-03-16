import { createFileRoute } from '@tanstack/react-router';
import { IconPlacementVariants } from '#examples/iconPlacement/variants';

export const Route = createFileRoute('/components/iconPlacement/variants')({
  component: () => <IconPlacementVariants />,
  staticData: {
    title: 'IconPlacement. Варианты использования',
    description:
      'Рекомендуется в качестве отдельно стоящих иконок использовать компонент Icon Button, а Icon Placement применять только в случаях, когда это действительно необходимо, как правило, это ограниченное пространство внутри компонентов.',
  },
});
