import { createFileRoute } from '@tanstack/react-router';
import { TagTooltip } from '#examples/tag/tooltip';

export const Route = createFileRoute('/components/tag/tooltip')({
  component: () => <TagTooltip />,
  staticData: {
    title: 'Tag. Тултип',
    description: 'В случае ограниченного пространства используется тултип.',
  },
});
