import { createFileRoute } from '@tanstack/react-router';
import { BadgeVariants } from '#examples/badge/badgeVariants';

export const Route = createFileRoute('/components/badge/badgeVariants')({
  component: () => <BadgeVariants />,
  staticData: {
    title: 'Badge. Варианты использования',
    description: '',
  },
});
