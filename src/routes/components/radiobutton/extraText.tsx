import { createFileRoute } from '@tanstack/react-router';
import { RadioButtonExtraText } from '#examples/radiobutton/extraText';

export const Route = createFileRoute('/components/radiobutton/extraText')({
  component: () => <RadioButtonExtraText />,
  staticData: {
    title: 'RadioButton. Дополнительный текст',
    description: 'Состояния аналогичны стандартным радио кнопкам',
  },
});
