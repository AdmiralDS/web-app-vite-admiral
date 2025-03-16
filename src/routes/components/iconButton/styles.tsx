import { createFileRoute } from '@tanstack/react-router';
import { Styles } from '#examples/iconButton/styles';

export const Route = createFileRoute('/components/iconButton/styles')({
  component: () => <Styles />,
  staticData: {
    title: 'IconButton. Стили и размеры',
    description: 'Кнопки представлены в двух стилях, размеры аналогичны Button.',
  },
});
