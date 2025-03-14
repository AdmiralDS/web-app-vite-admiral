import { createFileRoute } from '@tanstack/react-router';
import { CheckboxAdditionalText } from '#examples/checkbox/additionalText';

export const Route = createFileRoute('/components/checkbox/additionalText')({
  component: () => <CheckboxAdditionalText />,
  staticData: {
    title: 'CheckboxField. Вариация с дополнительным текстом',
    description: 'Состояния аналогичны стандартным чекбоксам',
  },
});
