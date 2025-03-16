import { createFileRoute } from '@tanstack/react-router';
import { TooltipBasic } from '#examples/tooltip';

export const Route = createFileRoute('/components/tooltip/')({
  component: () => <TooltipBasic />,
  staticData: {
    title: 'Tooltip. Базовый пример',
    description:
      'Компонент, отвечающий за подсказки, детализацию информации или пояснения. Tooltip можно «привязать» к любому компоненту, которому требуется подсказка, если это не конфликтует с уже существующими функциями компонента.',
  },
});
