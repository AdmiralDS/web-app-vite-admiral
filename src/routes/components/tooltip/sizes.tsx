import { createFileRoute } from '@tanstack/react-router';
import { TooltipSizes } from '#examples/tooltip/sizes';

export const Route = createFileRoute('/components/tooltip/sizes')({
  component: () => <TooltipSizes />,
  staticData: {
    title: 'Tooltip. Размеры',
    description:
      'Существует в двух размерах: S 20px и M 24px по высоте. Рекомендуется максимальная ширина 488px. При большем объеме используйте компонент Hint.',
  },
});
