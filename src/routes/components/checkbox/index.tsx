import { createFileRoute } from '@tanstack/react-router';
import { CheckboxBasic } from '#examples/checkbox';

export const Route = createFileRoute('/components/checkbox/')({
  component: () => <CheckboxBasic />,
  staticData: {
    title: 'CheckboxField. Базовый пример.',
    description:
      'Чекбоксы применяются, когда есть список опций для выбора. Можно выбрать любое количество опций из списка. Выбор одних пунктов никак не влияет на другие.',
  },
});
