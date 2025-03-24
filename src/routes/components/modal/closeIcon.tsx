import { createFileRoute } from '@tanstack/react-router';
import { ModalCloseIcon } from '#examples/modal/closeIcon';

export const Route = createFileRoute('/components/modal/closeIcon')({
  component: () => <ModalCloseIcon />,
  staticData: {
    title: 'Modal. Иконка закрытия',
    description:
      'Во всех модальных окнах можно отключать иконку закрытия (крестик). Также есть возможность закрывать модальное окно при клике вне его и по нажатию Escape.',
  },
});
