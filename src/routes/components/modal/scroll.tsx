import { createFileRoute } from '@tanstack/react-router';
import { ModalScroll } from '#examples/modal/scroll';

export const Route = createFileRoute('/components/modal/scroll')({
  component: () => <ModalScroll />,
  staticData: {
    title: 'Modal. Скролл',
    description:
      'Если нужен вертикальный скролл, то он появляется у края модального окна. Область его прокрутки равна высоте контентной области.',
  },
});
