import { createFileRoute } from '@tanstack/react-router';
import { TooltipRef } from '#examples/tooltip/ref';

export const Route = createFileRoute('/components/tooltip/ref')({
  component: () => <TooltipRef />,
  staticData: {
    title: 'Tooltip. Пример с получением ref тултипа',
    description: '',
  },
});
