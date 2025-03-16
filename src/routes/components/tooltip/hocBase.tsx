import { createFileRoute } from '@tanstack/react-router';
import { TooltipHocBase } from '#examples/tooltip/hocBase';

export const Route = createFileRoute('/components/tooltip/hocBase')({
  component: () => <TooltipHocBase />,
  staticData: {
    title: 'TooltipHoc. Базовый пример',
    description: 'Компонент позволяет использовать тултип с преднастроенной базовой логикой',
  },
});
