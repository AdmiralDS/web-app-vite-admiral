import { createFileRoute } from '@tanstack/react-router';
import { RadioButtonBasic } from '#examples/radiobutton';

export const Route = createFileRoute('/components/radiobutton/')({
  component: () => <RadioButtonBasic />,
  staticData: {
    title: 'RadioButton. Базовый пример',
    description:
      'Радиальные кнопки применяются, когда есть список опций, из которых пользователь может выбрать только один вариант',
  },
});
