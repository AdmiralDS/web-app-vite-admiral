import { createFileRoute } from '@tanstack/react-router';
import { DrawerPosition } from '#examples/drawer/position';

export const Route = createFileRoute('/components/drawer/position')({
  component: () => <DrawerPosition />,
  staticData: {
    title: 'Drawer. Расположение компонента',
    description:
      'Drawer может располагаться как справа (по умолчанию), так и слева. Расположение Drawerа определяется параметром position. При этом, компоновка элементов внутри панели не изменяется в зависимости от расположения.',
  },
});
