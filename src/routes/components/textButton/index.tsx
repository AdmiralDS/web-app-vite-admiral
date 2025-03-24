import { createFileRoute } from '@tanstack/react-router';
import { TextButtonBasic } from '#examples/textButton';

export const Route = createFileRoute('/components/textButton/')({
  component: () => <TextButtonBasic />,
  staticData: {
    title: 'TextButton. Базовый пример',
    description: 'Может быть с иконкой в начале, в конце или только с текстом.',
  },
});
