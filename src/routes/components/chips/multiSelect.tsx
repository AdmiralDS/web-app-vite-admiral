import { createFileRoute } from '@tanstack/react-router';
import { ChipsMultiSelect } from '#examples/chips/multiSelect';

export const Route = createFileRoute('/components/chips/multiSelect')({
  component: () => <ChipsMultiSelect />,
  staticData: {
    title: 'Chips для множественного выбора',
    description: 'Chips в режиме чекбоксов, когда можно выбрать любое количество значений.',
  },
});
