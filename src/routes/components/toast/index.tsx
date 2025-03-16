import { createFileRoute } from '@tanstack/react-router';
import { ToastBasic } from '#examples/toast';

export const Route = createFileRoute('/components/toast/')({
  component: () => <ToastBasic />,
  staticData: {
    title: 'Toast. Базовый пример',
    description: 'Компонент служит для демонстрации всплывающих сообщений.',
  },
});
