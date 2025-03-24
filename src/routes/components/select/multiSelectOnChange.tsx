import { createFileRoute } from '@tanstack/react-router';
import { MultiSelectOnChange } from '#examples/select/multiSelectOnChange';

export const Route = createFileRoute('/components/select/multiSelectOnChange')({
  component: () => <MultiSelectOnChange />,
  staticData: {
    title: 'mode="multiple" с обработчиком события onChange',
  },
});
