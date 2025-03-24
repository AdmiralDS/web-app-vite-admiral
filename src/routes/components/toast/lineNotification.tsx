import { createFileRoute } from '@tanstack/react-router';
import { ToastLineNotification } from '#examples/toast/lineNotification';

export const Route = createFileRoute('/components/toast/lineNotification')({
  component: () => <ToastLineNotification />,
  staticData: {
    title: 'Toast. Line Notification',
    description:
      'Быстрые уведомления всплывают сверху по всей ширине рабочей области сайта, и остаются там несколько секунд (настраиваемый параметр). Могут содержать ссылку или быть без нее.',
  },
});
