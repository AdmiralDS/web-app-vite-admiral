import { createFileRoute } from '@tanstack/react-router';
import { SelectMultiCustomValues } from '#examples/select/multiCustomValues';

export const Route = createFileRoute('/components/select/multiCustomValues')({
  component: () => <SelectMultiCustomValues />,
  staticData: {
    title: 'Кастомное отображение значений с множественным выбором',
  },
});
