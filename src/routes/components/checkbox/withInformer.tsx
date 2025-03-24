import { createFileRoute } from '@tanstack/react-router';
import { CheckboxWithInformers } from '#examples/checkbox/withInformer';

export const Route = createFileRoute('/components/checkbox/withInformer')({
  component: () => <CheckboxWithInformers />,
  staticData: {
    title: 'CheckboxField. Вариация с информером',
    description: 'Состояния аналогичны стандартным чекбоксам, подсказка появляется по Hover на иконке',
  },
});
