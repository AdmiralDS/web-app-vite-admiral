import { createFileRoute } from '@tanstack/react-router';
import { OverflowMenuBasic } from '#examples/overflowMenu';

export const Route = createFileRoute('/components/overflowMenu/')({
  component: () => <OverflowMenuBasic />,
  staticData: {
    title: 'OverflowMenu. Базовый пример',
    description:
      'Компонент используется для открытия меню дополнительных опций, например, в случаях ограниченного пространства. В основном применяется в составе других комопнентов.',
  },
});
