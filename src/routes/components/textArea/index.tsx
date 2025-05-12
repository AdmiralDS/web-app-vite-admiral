import { TextAreaBasic } from '#examples/textArea';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/components/textArea/')({
  component: () => <TextAreaBasic />,
  staticData: {
    title: 'TextArea. Базовый пример',
  },
});
