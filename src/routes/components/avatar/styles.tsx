import { createFileRoute } from '@tanstack/react-router';
import { AvatarStyles } from '#examples/avatar/styles';

export const Route = createFileRoute('/components/avatar/styles')({
  component: () => <AvatarStyles />,
  staticData: {
    title: 'Avatar, AvatarActivity. Стили',
    description: '',
  },
});
