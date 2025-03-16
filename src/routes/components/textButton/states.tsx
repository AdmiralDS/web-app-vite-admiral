import { createFileRoute } from '@tanstack/react-router';
import { TextButtonStates } from '#examples/textButton/states';

export const Route = createFileRoute('/components/textButton/states')({
  component: () => <TextButtonStates />,
  staticData: {
    title: 'TextButton. Состояния',
  },
});
