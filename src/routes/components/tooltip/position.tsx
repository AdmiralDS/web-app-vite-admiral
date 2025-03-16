import { createFileRoute } from '@tanstack/react-router';
import { TooltipPosition } from '#examples/tooltip/position';

export const Route = createFileRoute('/components/tooltip/position')({
  component: () => <TooltipPosition />,
  staticData: {
    title: 'Tooltip. Позиционирование',
    description: 'Приоритетным является расположение тултипа снизу объекта.',
  },
});

/*
Позиционируется по центру объекта, сверху, снизу, слева или справа с отступом 8px.
*/
