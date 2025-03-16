import { createFileRoute } from '@tanstack/react-router';
import { TooltipWithMenuButton } from '#examples/tooltip/withMenuButton';

export const Route = createFileRoute('/components/tooltip/withMenuButton')({
  component: () => <TooltipWithMenuButton />,
  staticData: {
    title: 'Tooltip. Базовый пример с MenuButton',
    description: '',
  },
});
