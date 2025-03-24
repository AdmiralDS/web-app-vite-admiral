import { createFileRoute } from '@tanstack/react-router';
import { CardTabMenu } from '#examples/tabMenu/cardTabMenu';

export const Route = createFileRoute('/components/tabMenu/addCardTab')({
  component: () => <CardTabMenu />,
  staticData: {
    title: 'CardTabMenu. Добавление и удаление вкладок',
  },
});
