import { createFileRoute } from '@tanstack/react-router';
import { ProgressPageStyles } from '#examples/progressPage/styles';

export const Route = createFileRoute('/components/progressPage/styles')({
  component: () => <ProgressPageStyles />,
  staticData: {
    title: 'ProgressPage. Стили',
    description: '',
  },
});
