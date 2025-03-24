import { createFileRoute } from '@tanstack/react-router';
import { NotificationStates } from '#examples/notification/states';

export const Route = createFileRoute('/components/notification/states')({
  component: () => <NotificationStates />,
  staticData: {
    title: 'Notification. Состояния',
    description: '',
  },
});
