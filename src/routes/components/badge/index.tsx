import { createFileRoute } from '@tanstack/react-router';
import { BadgeBasic } from '#examples/badge';

export const Route = createFileRoute('/components/badge/')({
  component: () => <BadgeBasic />,
  staticData: {
    title: 'Badge. Базовый пример',
    description:
      'Обычно дополняет другие компоненты и показывает количественные зачения. Например, в компоненте Tabs может показывать количество элементов в закладке. Или показывать количество оповещений в панели нотификации.',
  },
});
