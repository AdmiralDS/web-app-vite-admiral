import { createFileRoute } from '@tanstack/react-router';
import { ToastWithProgressBar } from '#examples/toast/withProgressBar';

export const Route = createFileRoute('/components/toast/withProgressBar')({
  component: () => <ToastWithProgressBar />,
  staticData: {
    title: 'Toast. Опция Countdown',
    description:
      'Шкала, графически показывающая время, через которое закроется уведомление. Не изменяет размер компонента, находится в нижней части. Время отсчета соответствует времени показа уведомления.',
  },
});
