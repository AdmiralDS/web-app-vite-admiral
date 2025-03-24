import { createFileRoute } from '@tanstack/react-router';
import { ContentSwitcherSizes } from '#examples/contentSwitcher/sizes';

export const Route = createFileRoute('/components/contentSwitcher/sizes')({
  component: () => <ContentSwitcherSizes />,
  staticData: {
    title: 'ContentSwitcher. Размеры',
    description: 'Существует в трех размерах — 48, 40, 32 px по высоте.',
  },
});
