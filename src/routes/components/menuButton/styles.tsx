import { createFileRoute } from '@tanstack/react-router';
import { Styles } from '#examples/menuButton/styles';

export const Route = createFileRoute('/components/menuButton/styles')({
  component: () => <Styles />,
  staticData: {
    title: 'MenuButton. Стили и размеры',
    description: 'Кнопки представлены в пяти стилях, размеры аналогичны Button.',
  },
});
