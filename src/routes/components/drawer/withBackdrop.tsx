import { createFileRoute } from '@tanstack/react-router';
import { DrawerWithBackdrop } from '#examples/drawer/withBackdrop';

export const Route = createFileRoute('/components/drawer/withBackdrop')({
  component: () => <DrawerWithBackdrop />,
  staticData: {
    title: 'Drawer. Блокировка контента страницы (Backdrop = True)',
    description:
      'По умолчанию Drawer блокирует контент страницы, за это отвечает параметр backdrop, равный по умолчанию true. В этом случае страница затемняется, поверх экрана накладывается цвет Opacity/Modal. Взаимодействовать с контентом страницы при открытой панели нельзя. Закрытие Drawer может происходить по клику на крестик, по клику на кнопке в футере панели, по нажатию на затемненную область (при closeOnBackdropClick = true), по нажатию на клавишу Escape (при closeOnEscapeKeyDown = true).',
  },
});
