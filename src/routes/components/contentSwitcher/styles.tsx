import { createFileRoute } from '@tanstack/react-router';
import { ContentSwitcherStyles } from '#examples/contentSwitcher/styles';

export const Route = createFileRoute('/components/contentSwitcher/styles')({
  component: () => <ContentSwitcherStyles />,
  staticData: {
    title: 'ContentSwitcher. Стили',
    description: 'Существует в двух цветовых схемах (primary и secondary).',
  },
});
