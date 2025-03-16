import { createFileRoute } from '@tanstack/react-router';
import { LinkStyles } from '#examples/link/styles';

export const Route = createFileRoute('/components/link/styles')({
  component: () => <LinkStyles />,
  staticData: {
    title: 'Link. Стили',
    description: 'Ссылки бывают двух типов — Primary и Secondary, и двух размеров — M (24px) и S (20px).',
  },
});
