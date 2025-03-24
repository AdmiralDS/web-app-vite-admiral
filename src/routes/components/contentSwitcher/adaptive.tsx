import { createFileRoute } from '@tanstack/react-router';
import { ContentSwitcherAdaptive } from '#examples/contentSwitcher/adaptive';

export const Route = createFileRoute('/components/contentSwitcher/adaptive')({
  component: () => <ContentSwitcherAdaptive />,
  staticData: {
    title: 'ContentSwitcher. Размеры',
    description: '',
  },
});
