import { createFileRoute } from '@tanstack/react-router';
import { SelectExternalFilter } from '#examples/select/externalFilter';

export const Route = createFileRoute('/components/select/externalFilter')({
  component: () => <SelectExternalFilter />,
  staticData: {
    title: 'Внешняя фильтрация',
    description:
      'Т.к. компонент построен на нативном select, в выбранных значениях могут отображаться только те элементы, которые переданы в качестве списка option',
  },
});
