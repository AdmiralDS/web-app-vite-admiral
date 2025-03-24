import { createFileRoute } from '@tanstack/react-router';
import { AddTabExample } from '#examples/tabMenu/addTab';

export const Route = createFileRoute('/components/tabMenu/addTab')({
  component: () => <AddTabExample />,
  staticData: {
    title: 'TabMenuHorizontal. Добавление и удаление вкладок',
  },
});
