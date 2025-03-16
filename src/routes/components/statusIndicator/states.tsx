import { createFileRoute } from '@tanstack/react-router';
import { StatusIndicatorStates } from '#examples/statusIndicator/states';

export const Route = createFileRoute('/components/statusIndicator/states')({
  component: () => <StatusIndicatorStates />,
  staticData: {
    title: 'StatusIndicator. Состояния',
    description:
      'Представлен в единственном состоянии Default, есть возможность самостоятельно переключать статус при помощи палитры.',
  },
});
