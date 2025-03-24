import { createFileRoute } from '@tanstack/react-router';
import { ContentSwitcherIconOnly } from '#examples/contentSwitcher/iconsOnly';

export const Route = createFileRoute('/components/contentSwitcher/iconsOnly')({
  component: () => <ContentSwitcherIconOnly />,
  staticData: {
    title: 'ContentSwitcher. Иконки без текста',
    description: 'В компоненте можно включать только иконки. Hover. В этом варианте показывается подсказка функции.',
  },
});
