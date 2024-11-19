import { createFileRoute } from '@tanstack/react-router';
import { Button } from '@admiral-ds/react-ui';
import { ExampleSection } from '../../-helpers/examples';

const ButtonAdaptive = () => {
  return (
    <ExampleSection
      text="Кнопки с текстом и кнопки с текстом и иконкой можно рястягивать по ширине, при использовании для адаптивного дизайна на мобильных утройствах.
            Следует заметить, что не стоит делать все кнопки на мобильном устройстве во всю ширину экрана, рекомендуется это делать с 1-2 главными кнопками."
    >
      <Button dimension="l" appearance="primary" style={{ width: '100%' }}>
        Button
      </Button>
    </ExampleSection>
  );
};

export const Route = createFileRoute('/components/button/adaptive')({
  component: () => <ButtonAdaptive />,
  staticData: {
    title: 'Адаптив',
    description: '',
  },
});
