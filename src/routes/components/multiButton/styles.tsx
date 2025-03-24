import { createFileRoute } from '@tanstack/react-router';
import { Styles } from '#examples/multiButton/styles';

export const Route = createFileRoute('/components/multiButton/styles')({
  component: () => <Styles />,
  staticData: {
    title: 'Button. Стили и размеры',
    description: 'Кнопки представлены в трех стилях, размеры аналогичны Button.',
  },
});
