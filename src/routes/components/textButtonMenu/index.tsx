import { createFileRoute } from '@tanstack/react-router';
import { TextButtonMenuBasic } from '#examples/textButtonMenu';

export const Route = createFileRoute('/components/textButtonMenu/')({
  component: () => <TextButtonMenuBasic />,
  staticData: {
    title: 'TextButtonMenu. Базовый пример',
    description: 'Может быть с иконкой в начале или только с текстом.',
  },
});
