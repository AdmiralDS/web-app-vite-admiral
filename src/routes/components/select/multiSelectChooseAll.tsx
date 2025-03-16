import { createFileRoute } from '@tanstack/react-router';
import { MultiSelectChooseAll } from '#examples/select/multiSelectChooseAll';

export const Route = createFileRoute('/components/select/multiSelectChooseAll')({
  component: () => <MultiSelectChooseAll />,
  staticData: {
    title: 'SearchSelect multiple с кнопкой "Выбрать все"',
  },
});
