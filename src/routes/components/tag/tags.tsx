import { createFileRoute } from '@tanstack/react-router';
import { TagsExample } from '#examples/tag/tags';

export const Route = createFileRoute('/components/tag/tags')({
  component: () => <TagsExample />,
  staticData: {
    title: 'Tags. Группа тэгов',
    description:
      'Тэги можно использовать группами. Горизонтальные и вертикальные отступы между соседними тэгами равны 8px. Для каждого тэга можно отдельно задать width, kind и onClick, либо можно задать единые width, kind и onClick через Tags. Dimension задается единый для всех тэгов в группе.',
  },
});
