import { createFileRoute } from '@tanstack/react-router';
import { StyleExample } from '#examples/tanstackTable/styleExample';

export const Route = createFileRoute('/components/tanstackTable/styleExample')({
  component: () => <StyleExample />,
  staticData: {
    title: 'TanstackTable.',
    description: `Пример стилизации таблицы через props.`,
  },
});
