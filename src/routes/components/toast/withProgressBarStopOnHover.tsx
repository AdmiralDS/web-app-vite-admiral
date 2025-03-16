import { createFileRoute } from '@tanstack/react-router';
import { ToastWithProgressBarStopOnHover } from '#examples/toast/withProgressBarStopOnHover';

export const Route = createFileRoute('/components/toast/withProgressBarStopOnHover')({
  component: () => <ToastWithProgressBarStopOnHover />,
  staticData: {
    title: 'Toast. С задержкой при наведении',
    description:
      'Шкала, графически показывающая время, через которое закроется уведомление. Не изменяет размер компонента, находится в нижней части. Время отсчета соответствует времени показа уведомления.',
  },
});
