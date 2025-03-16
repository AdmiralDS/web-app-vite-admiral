import { createFileRoute } from '@tanstack/react-router';
import { SelectMultiCustomDeleteChip } from '#examples/select/multiCustomDeleteChip';

export const Route = createFileRoute('/components/select/multiCustomDeleteChip')({
  component: () => <SelectMultiCustomDeleteChip />,
  staticData: {
    title: 'mode="multiple" с кастомным обработчиком удаления чипса',
  },
});
