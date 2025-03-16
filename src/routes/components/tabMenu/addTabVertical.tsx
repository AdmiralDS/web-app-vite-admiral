import { createFileRoute } from '@tanstack/react-router';
import { AddTabVerticalExample } from '#examples/tabMenu/addTabVertical';

export const Route = createFileRoute('/components/tabMenu/addTabVertical')({
  component: () => <AddTabVerticalExample />,
  staticData: {
    title: 'TabMenuVertical. Добавление и удаление вкладок',
  },
});
