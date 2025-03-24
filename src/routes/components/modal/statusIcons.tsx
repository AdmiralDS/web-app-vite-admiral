import { createFileRoute } from '@tanstack/react-router';
import { StatusIcon } from '#examples/modal/statusIcons';

export const Route = createFileRoute('/components/modal/statusIcons')({
  component: () => <StatusIcon />,
  staticData: {
    title: 'Modal. Статусные иконки',
    description:
      'Используются в простых текстовых модальных окнах для оповещений пользователя о важных событиях. Статус модального окна может быть четырех типов: Success, Information, Danger, Warning.',
  },
});
