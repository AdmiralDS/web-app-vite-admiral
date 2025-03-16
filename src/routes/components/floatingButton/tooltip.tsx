import { createFileRoute } from '@tanstack/react-router';
import { FloatingButtonTooltip } from '#examples/floatingButton/tooltip';

export const Route = createFileRoute('/components/floatingButton/tooltip')({
  component: () => <FloatingButtonTooltip />,
  staticData: {
    title: 'FloatingButton. Пример с Tooltip',
    description:
      'Компонент FloatingButton используется для отображения наиболее частых или важных действий на экране. Не рекомендуется использовать более одной FloatingButton на экране.',
  },
});
