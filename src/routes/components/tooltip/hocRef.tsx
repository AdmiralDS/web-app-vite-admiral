import { createFileRoute } from '@tanstack/react-router';
import { TooltipHocRef } from '#examples/tooltip/hocRef';

export const Route = createFileRoute('/components/tooltip/hocRef')({
  component: () => <TooltipHocRef />,
  staticData: {
    title: 'TooltipHoc. Прокидывание ref на результат вызова TooltipHoc',
    description: '',
  },
});
