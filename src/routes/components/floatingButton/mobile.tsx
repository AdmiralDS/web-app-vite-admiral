import { createFileRoute } from '@tanstack/react-router';
import { FloatingButtonMobile } from '#examples/floatingButton/mobile';

export const Route = createFileRoute('/components/floatingButton/mobile')({
  component: () => <FloatingButtonMobile />,
  staticData: {
    title: 'FloatingButton. Mobile',
    description: '',
  },
});
