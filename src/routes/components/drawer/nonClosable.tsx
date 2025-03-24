import { createFileRoute } from '@tanstack/react-router';
import { DrawerNonClosable } from '#examples/drawer/nonClosable';

export const Route = createFileRoute('/components/drawer/nonClosable')({
  component: () => <DrawerNonClosable />,
  staticData: {
    title: 'С обязательным условием (non-closable Drawer)',
    description:
      'В некоторых случаях применим Drawer с обязательным условием (non-closable Drawer), то есть такая панель, которую можно закрыть только нажав одну из кнопок в футере. Крестик закрытия отсутствует, нажатие на затемненную область ни к чему не приводит. Для того чтобы крестик закрытия отсутствовал используйте параметр displayCloseIcon равный false.',
  },
});
