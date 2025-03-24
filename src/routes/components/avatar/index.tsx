import { createFileRoute } from '@tanstack/react-router';
import { AvatarBasic } from '#examples/avatar';

export const Route = createFileRoute('/components/avatar/')({
  component: () => <AvatarBasic />,
  staticData: {
    title: 'Avatar, AvatarActivity. Базовый пример',
    description: 'Компонент используется для отображения фотографии пользователя, его инициалов или иконки.',
  },
});
