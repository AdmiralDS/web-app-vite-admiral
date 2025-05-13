import { createFileRoute } from '@tanstack/react-router';
import { TextAreaVariants } from '#examples/textArea/variants';

export const Route = createFileRoute('/components/textArea/variants')({
  component: () => <TextAreaVariants />,
  staticData: {
    title: 'TextArea. Варианты использования',
  },
});
