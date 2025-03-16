import { createFileRoute } from '@tanstack/react-router';
import { TooltipVariants } from '#examples/tooltip/variants';

export const Route = createFileRoute('/components/tooltip/variants')({
  component: () => <TooltipVariants />,
  staticData: {
    title: 'Tooltip. Кастомное наполнение',
    description:
      'При необходимости в Tooltip можно отобразить контент отличающийся от стандартного, например большую толщину текста или размер шрифта.',
  },
});
