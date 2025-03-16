import { createFileRoute } from '@tanstack/react-router';
import { LinkWithIcon } from '#examples/link/withIcon';

export const Route = createFileRoute('/components/link/withIcon')({
  component: () => <LinkWithIcon />,
  staticData: {
    title: 'Link. С иконками',
    description: 'Может применяться отдельно или внутри текста, с иконкой или без.',
  },
});
