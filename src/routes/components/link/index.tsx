import { createFileRoute } from '@tanstack/react-router';
import { LinkBasic } from '#examples/link';

export const Route = createFileRoute('/components/link/')({
  component: () => <LinkBasic />,
  staticData: {
    title: 'Link. Базовый пример',
    description: 'Компонент используется для навигации. Может применяться отдельно или внутри текста.',
  },
});
