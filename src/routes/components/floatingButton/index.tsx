import { createFileRoute } from '@tanstack/react-router';
import { FloatingButtonBasic } from '#examples/floatingButton';

export const Route = createFileRoute('/components/floatingButton/')({
  component: () => <FloatingButtonBasic />,
  staticData: {
    title: 'FloatingButton. Базовый пример',
    description:
      'Компонент FloatingButton используется для отображения наиболее частых или важных действий на экране. Не рекомендуется использовать более одной FloatingButton на экране.',
  },
});
