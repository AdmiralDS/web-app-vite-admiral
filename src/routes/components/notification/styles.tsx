import { createFileRoute } from '@tanstack/react-router';
import { NotificationStyles } from '#examples/notification/styles';

export const Route = createFileRoute('/components/notification/styles')({
  component: () => <NotificationStyles />,
  staticData: {
    title: 'Notification. Стили',
    description: 'В зависимости от статуса сообщения используются четыре вида цветовых схем данного компонента',
  },
});
