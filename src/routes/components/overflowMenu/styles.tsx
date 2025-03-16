import { createFileRoute } from '@tanstack/react-router';
import { OverflowMenuStyles } from '#examples/overflowMenu/styles';

export const Route = createFileRoute('/components/overflowMenu/styles')({
  component: () => <OverflowMenuStyles />,
  staticData: {
    title: 'OverflowMenu. Размеры и ориентация',
    description:
      'Компонент имеет три размера — L 24px, M 20px, S 16px. Рекомендуется к размерам компонента L и M применять выпадающее меню размера M с высотой строки 40px. Для размера S использовать выпадающее меню размера S с высотой строки 32px. В зависимости от контекста применяется вертикальная или горизонтальная ориентация точек.',
  },
});
