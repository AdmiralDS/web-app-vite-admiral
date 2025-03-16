import { createFileRoute } from '@tanstack/react-router';
import { TooltipHocRefSetter } from '#examples/tooltip/hocRefSetter';

export const Route = createFileRoute('/components/tooltip/hocRefSetter')({
  component: () => <TooltipHocRefSetter />,
  staticData: {
    title: 'TooltipHoc. Утилита refSetter для мерджа рефов.',
    description:
      'Если в ваш компонент извне передан параметр ref и у вас есть внутренний ref в компоненте, для синхронной работы данных рефов и их мерджа вы можете воспользоваться утилитой refSetter.',
  },
});
