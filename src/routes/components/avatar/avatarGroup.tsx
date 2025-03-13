import { createFileRoute } from '@tanstack/react-router';
import { AvatarGroupExample } from '#examples/avatar/avatarGroup';

export const Route = createFileRoute('/components/avatar/avatarGroup')({
  component: () => <AvatarGroupExample />,
  staticData: {
    title: 'Группировка',
    description: 'Компоненты AvatarGroup и AvatarActivityGroup.',
  },
});
