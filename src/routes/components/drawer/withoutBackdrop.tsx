import { createFileRoute } from '@tanstack/react-router';
import { DrawerWithoutBackdrop } from '#examples/drawer/withoutBackdrop';

export const Route = createFileRoute('/components/drawer/withoutBackdrop')({
  component: () => <DrawerWithoutBackdrop />,
  staticData: {
    title: 'Drawer. Без блокировки контента страницы (Backdrop = False)',
    description:
      'Если необходим Drawer без блокировки контента страницы, то необходимо использовать параметр backdrop равный false. В этом случае пользователь сможет одновременно взаимодействовать и с Drawer, и с содержимым страницы. Закрытие Drawer может происходить по клику на крестик, по клику на кнопке в футере панели, по нажатию на клавишу Escape (при closeOnEscapeKeyDown = true).',
  },
});
