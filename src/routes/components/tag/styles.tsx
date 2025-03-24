import { createFileRoute } from '@tanstack/react-router';
import { TagStyles } from '#examples/tag/styles';

export const Route = createFileRoute('/components/tag/styles')({
  component: () => <TagStyles />,
  staticData: {
    title: 'Tag. Стили и размеры',
    description: 'Тэг имеет 2 размера (M, S) и может отображать статус с помощью фона или цветной статусной метки.',
  },
});
