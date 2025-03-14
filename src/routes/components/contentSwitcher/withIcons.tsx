import { createFileRoute } from '@tanstack/react-router';
import { ContentSwitcherWithIcon } from '#examples/contentSwitcher/withIcons';

export const Route = createFileRoute('/components/contentSwitcher/withIcons')({
  component: () => <ContentSwitcherWithIcon />,
  staticData: {
    title: 'ContentSwitcher. С иконками',
    description: 'В компоненте можно включать иконки.',
  },
});
