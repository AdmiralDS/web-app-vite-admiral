import { createFileRoute } from '@tanstack/react-router';
import { ModalBasic } from '#examples/modal';

export const Route = createFileRoute('/components/modal/')({
  component: () => <ModalBasic />,
  staticData: {
    title: 'Modal. Базовый пример',
    description:
      'Модальное окно используется для ситуаций, когда требуется акцентировать внимание пользователя на подтверждении какого-либо действия. Всплывает по центру страницы и блокирует содержимое страницы, которое расположено под модальным окном. Для затемнения страницы используется стиль Opacity/Modal, имеющий 60% прозрачности черного цвета.',
  },
});
