import { createFileRoute } from '@tanstack/react-router';
import { ProgressHeaderStyles } from '#examples/progressHeader/styles';

export const Route = createFileRoute('/components/progressHeader/styles')({
  component: () => <ProgressHeaderStyles />,
  staticData: {
    title: 'ProgressHeader. Стили',
    description: '',
  },
});
