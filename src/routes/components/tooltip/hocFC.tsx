import { createFileRoute } from '@tanstack/react-router';
import { TooltipHocFC } from '#examples/tooltip/hocFC';

export const Route = createFileRoute('/components/tooltip/hocFC')({
  component: () => <TooltipHocFC />,
  staticData: {
    title: 'TooltipHoc. Пример использования с функциональным компонентом',
    description: '',
  },
});
