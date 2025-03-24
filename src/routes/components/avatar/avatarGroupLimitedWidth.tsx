import { createFileRoute } from '@tanstack/react-router';
import { AvatarGroupExample } from '#examples/avatar/avatarGroupLimitedWidth';

export const Route = createFileRoute('/components/avatar/avatarGroupLimitedWidth')({
  component: () => <AvatarGroupExample />,
  staticData: {
    title: 'Группировка при ограниченной ширине',
    description:
      'При достижении условного максимума отображаемых аватаров, последним ставится аватар с отображением количества скрытых элементов.',
  },
});
