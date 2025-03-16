import { createFileRoute } from '@tanstack/react-router';
import { ToggleMobile } from '#examples/toggle/mobile';

export const Route = createFileRoute('/components/toggle/mobile')({
  component: () => <ToggleMobile />,
  staticData: {
    title: 'Toggle. Адаптив',
    description:
      'Размер вариации компонента с текстом слева изменяется вручную, может применяться как адаптив на мобильных устройствах. При создании отдельных макетов для мобильных устройств, рекомендуется использовать вариацию комопнента размера M с текстом слева, который можно вытянуть на всю ширину экрана.',
  },
});
