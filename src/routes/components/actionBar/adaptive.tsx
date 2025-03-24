import { createFileRoute } from '@tanstack/react-router';
import { ActionBarAdaptive } from '#examples/actionBar/adaptive';

export const Route = createFileRoute('/components/actionBar/adaptive')({
  component: () => <ActionBarAdaptive />,
  staticData: {
    title: 'Адаптив. Overflow Menu',
    description: 'Если кнопки не помещаются в доступное горизонтальное пространство, они перемещаются в Dropdown Menu.',
  },
});
