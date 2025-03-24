import { createFileRoute } from '@tanstack/react-router';
import { ProgressHeaderAnimation } from '#examples/progressHeader/animation';

export const Route = createFileRoute('/components/progressHeader/animation')({
  component: () => <ProgressHeaderAnimation />,
  staticData: {
    title: 'ProgressHeader. Анимация',
    description: '',
  },
});
