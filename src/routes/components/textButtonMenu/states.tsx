import { createFileRoute } from '@tanstack/react-router';
import { TextButtonMenuStates } from '#examples/textButtonMenu/states';

export const Route = createFileRoute('/components/textButtonMenu/states')({
  component: () => <TextButtonMenuStates />,
  staticData: {
    title: 'TextButtonMenu. Состояния',
  },
});
