import { createFileRoute } from '@tanstack/react-router';
import { MultiSelectApplyButton } from '#examples/select/multiSelectApplyButton';

export const Route = createFileRoute('/components/select/multiSelectApplyButton')({
  component: () => <MultiSelectApplyButton />,
  staticData: {
    title: 'mode="multiple" с кнопкой "Применить"',
  },
});
