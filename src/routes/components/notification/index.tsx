import { createFileRoute } from '@tanstack/react-router';
import { NotificationBasic } from '#examples/notification';

export const Route = createFileRoute('/components/notification/')({
  component: () => <NotificationBasic />,
  staticData: {
    title: 'Notification. Базовый пример',
    description:
      'Статичные оповещения показывают важную для пользователя информацию, делая на ней акцент за счет визуального выделения. Оповещения бывают как с заголовком, так и без него. Можно включать-выключать ссылки. Компонент может быть произвольной ширины, но не рекомендуется превышать 488 px. На мобильных устройствах компонент занимает всю ширину экрана и используется без иконки статуса.',
  },
});
