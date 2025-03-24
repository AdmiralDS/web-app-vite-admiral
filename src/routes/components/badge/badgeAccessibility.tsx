import { createFileRoute } from '@tanstack/react-router';
import { BadgeAccessibility } from '#examples/badge/badgeAccessibility';

export const Route = createFileRoute('/components/badge/badgeAccessibility')({
  component: () => <BadgeAccessibility />,
  staticData: {
    title: 'Badge. Accessibility',
    description: '',
  },
});
