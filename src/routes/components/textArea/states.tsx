import { createFileRoute } from '@tanstack/react-router';
import { TextAreaState } from '#examples/textArea/states';

export const Route = createFileRoute('/components/textArea/states')({
  component: () => <TextAreaState />,
  staticData: {
    title: 'TextArea. Состояния',
  },
});
