import { createFileRoute } from '@tanstack/react-router';
import { SelectCustomOptionsWithCustomFilter } from '#examples/select/customOptionsWithCustomFilter';

export const Route = createFileRoute('/components/select/customOptionsWithCustomFilter')({
  component: () => <SelectCustomOptionsWithCustomFilter />,
  staticData: {
    title: 'Кастомные опции с кастомной фильтрацией',
  },
});
