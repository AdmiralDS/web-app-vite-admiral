import { createFileRoute } from '@tanstack/react-router';
import { TooltipScenario } from '#examples/tooltip/scenario';

export const Route = createFileRoute('/components/tooltip/scenario')({
  component: () => <TooltipScenario />,
  staticData: {
    title: 'Tooltip. Сценарии появления',
    description: '',
  },
});

/*
Позиционируется по центру объекта, сверху, снизу, слева или справа с отступом 8px.
*/
