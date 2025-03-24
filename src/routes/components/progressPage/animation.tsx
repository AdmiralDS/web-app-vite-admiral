import { createFileRoute } from '@tanstack/react-router';
import { ProgressPageAnimation } from '#examples/progressPage/animation';

export const Route = createFileRoute('/components/progressPage/animation')({
  component: () => <ProgressPageAnimation />,
  staticData: {
    title: 'ProgressPage. Анимация',
    description: '',
  },
});
