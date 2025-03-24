import { createFileRoute } from '@tanstack/react-router';
import { BadgeDotVariants } from '#examples/badgeDot/variants';

export const Route = createFileRoute('/components/badgeDot/variants')({
  component: () => <BadgeDotVariants />,
  staticData: {
    title: 'BadgeDot. Варианты использования',
    description: 'Имеет шесть разных цветов и четыре размера.',
  },
});
