import { createFileRoute } from '@tanstack/react-router';
import { TreeMobile } from '#examples/tree/mobile';

export const Route = createFileRoute('/components/tree/mobile')({
  component: () => <TreeMobile />,
  staticData: {
    title: 'Tree. Мобильная версия',
  },
});
