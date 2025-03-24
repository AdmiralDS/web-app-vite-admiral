import { createFileRoute } from '@tanstack/react-router';
import { StatusIndicatorBasic } from '#examples/statusIndicator';

export const Route = createFileRoute('/components/statusIndicator/')({
  component: () => <StatusIndicatorBasic />,
  staticData: {
    title: 'StatusIndicator. Базовый пример',
    description: 'Используется, чтобы описать, в каком состоянии находится тот или иной объект или действие.',
  },
});
