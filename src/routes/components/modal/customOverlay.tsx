import { createFileRoute } from '@tanstack/react-router';
import { ModalCustomOverlay } from '#examples/modal/customOverlay';

export const Route = createFileRoute('/components/modal/customOverlay')({
  component: () => <ModalCustomOverlay />,
  staticData: {
    title: 'Modal. Кастомизация подложки модального окна',
    description:
      'У пользователя есть возможность кастомизировать внешний вид подложки модального окна. Для этого можно воспользоваться параметром overlayStyledCss, чтобы задать миксин со стилями для подложки. Либо можно воспользоваться параметрами overlayClassName, overlayStyle.',
  },
});
