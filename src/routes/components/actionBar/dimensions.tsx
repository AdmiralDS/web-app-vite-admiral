import { createFileRoute } from '@tanstack/react-router';
import { ActionBarDimension } from '#examples/actionBar/dimensions';

export const Route = createFileRoute('/components/actionBar/dimensions')({
  component: () => <ActionBarDimension />,
  staticData: {
    title: 'ActionBar. Размеры',
    description: 'Представлен в 4х размерах по аналогии с обычными кнопками: XL (56), L (48), M (40), S (32)',
  },
});
