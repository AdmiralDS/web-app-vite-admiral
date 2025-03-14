import { createFileRoute } from '@tanstack/react-router';
import { ContentSwitcherWithBadge } from '#examples/contentSwitcher/withBadge';

export const Route = createFileRoute('/components/contentSwitcher/withBadge')({
  component: () => <ContentSwitcherWithBadge />,
  staticData: {
    title: 'ContentSwitcher. С Badge',
    description: 'В компоненте можно включать бэйджи.',
  },
});
