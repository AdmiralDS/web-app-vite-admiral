import { createFileRoute } from '@tanstack/react-router';
import { IconPlacementBasic } from '#examples/iconPlacement';

export const Route = createFileRoute('/components/iconPlacement/')({
  component: () => <IconPlacementBasic />,
  staticData: {
    title: 'IconPlacement. Базовый пример',
    description:
      'Icon Placement - вспомогательный компонент, обычно используется в составе других компонентов или организмов. По сути это любая иконка с заранее заданными состояниями Default, Hover, Press, Focus, Disable.',
  },
});
