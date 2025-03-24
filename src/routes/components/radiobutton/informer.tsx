import { createFileRoute } from '@tanstack/react-router';
import { RadioButtonInformer } from '#examples/radiobutton/informer';

export const Route = createFileRoute('/components/radiobutton/informer')({
  component: () => <RadioButtonInformer />,
  staticData: {
    title: 'RadioButton. Информер',
    description: 'Состояния аналогичны стандартным радио кнопкам, подсказка появляется по Hover на иконке.',
  },
});
