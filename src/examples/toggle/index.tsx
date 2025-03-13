import { createFileRoute } from '@tanstack/react-router';
import { ExampleSection } from '#routes/-helpers/examples';
import { Toggle } from '@admiral-ds/react-ui';

const ToggleBase = () => {
  return (
    <ExampleSection>
      <Toggle>Text</Toggle>
    </ExampleSection>
  );
};

export const Route = createFileRoute('/components/toggle/')({
  component: () => <ToggleBase />,
  staticData: {
    title: 'Toggle. Базовый пример',
    description:
      'Переключатель используется в ситуации, когда нужно переключиться между двумя равнозначными состояними интерфейса.',
  },
});
