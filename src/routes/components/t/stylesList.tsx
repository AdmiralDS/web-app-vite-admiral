import { createFileRoute } from '@tanstack/react-router';
import { TStylesList } from '#examples/t/stylesList';

export const Route = createFileRoute('/components/t/stylesList')({
  component: () => <TStylesList />,
  staticData: {
    title: 'T. Список стилей',
  },
});
