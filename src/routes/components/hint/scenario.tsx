import { createFileRoute } from '@tanstack/react-router';
import { HintScenario } from '#examples/hint/scenario';

export const Route = createFileRoute('/components/hint/scenario')({
  component: () => <HintScenario />,
  staticData: {
    title: 'Hint. Сценарии появления',
    description:
      'Помимо показа по ховеру и клику, компоненту можно присваивать показ по любому событию на странице, определяется пользователем.',
  },
});
