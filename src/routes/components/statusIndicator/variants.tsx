import { createFileRoute } from '@tanstack/react-router';
import { StatusIndicatorVariants } from '#examples/statusIndicator/variants';

export const Route = createFileRoute('/components/statusIndicator/variants')({
  component: () => <StatusIndicatorVariants />,
  staticData: {
    title: 'StatusIndicator. Варианты',
    description: '',
  },
});
