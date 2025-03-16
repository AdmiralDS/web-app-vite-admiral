import { createFileRoute } from '@tanstack/react-router';
import { MultiSelectWithSelectedOnTop } from '#examples/select/multiSelectWithSelectedOnTop';

export const Route = createFileRoute('/components/select/multiSelectWithSelectedOnTop')({
  component: () => <MultiSelectWithSelectedOnTop />,
  staticData: {
    title: 'mode="multiple" с поднятием выбранных опций вверх списка',
  },
});
