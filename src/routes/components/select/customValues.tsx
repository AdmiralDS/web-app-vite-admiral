import { createFileRoute } from '@tanstack/react-router';
import { SelectCustomValues } from '#examples/select/customValues';

export const Route = createFileRoute('/components/select/customValues')({
  component: () => <SelectCustomValues />,
  staticData: {
    title: 'Кастомное отображение значений',
  },
});
