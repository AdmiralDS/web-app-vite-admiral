import { createFileRoute } from '@tanstack/react-router';
import { TooltipHocClass } from '#examples/tooltip/hocClass';

export const Route = createFileRoute('/components/tooltip/hocClass')({
  component: () => <TooltipHocClass />,
  staticData: {
    title: 'TooltipHoc. Пример использования с классовым компонентом',
    description: '',
  },
});
