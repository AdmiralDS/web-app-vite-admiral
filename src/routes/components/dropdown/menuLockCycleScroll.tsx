import { createFileRoute } from '@tanstack/react-router';
import { MenuLockCycleScroll } from '#examples/dropdown/menuLockCycleScroll';

export const Route = createFileRoute('/components/dropdown/menuLockCycleScroll')({
  component: () => <MenuLockCycleScroll />,
  staticData: {
    title: 'Menu. Пример без цикла обхода пунктов',
    description:
      'Для блокировки цикличного обхода пунктов меню можно использовать onForwardCycleApprove и onBackwardCycleApprove.',
  },
});
