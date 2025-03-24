import { createFileRoute } from '@tanstack/react-router';
import { DrawerWidth } from '#examples/drawer/width';

export const Route = createFileRoute('/components/drawer/width')({
  component: () => <DrawerWidth />,
  staticData: {
    title: 'Drawer. Ширина компонента',
    description:
      'Ширина компонента задается пользователем, но не меньше 320 px. Drawer подстраивает свою ширину под ширину контента, либо пользователь может задать ширину компонента напрямую через параметры style или используя classname.',
  },
});
