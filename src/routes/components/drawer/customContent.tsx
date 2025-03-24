import { createFileRoute } from '@tanstack/react-router';
import { DrawerCustomContent } from '#examples/drawer/customContent';

export const Route = createFileRoute('/components/drawer/customContent')({
  component: () => <DrawerCustomContent />,
  staticData: {
    title: 'Drawer. Свободное (кастомизированное) наполнение',
    description:
      'Наполнение Drawer контентом полностью контролируется пользователем. Пользователь может разместить внутри Drawer любые свои компоненты, а также может воспользоваться вспомогательными компонентами DrawerTitle, DrawerContent, DrawerButtonPanel, экспортируемыми из библиотеки @admiral-ds/react-ui.',
  },
});
