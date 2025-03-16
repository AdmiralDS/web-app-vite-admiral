import { createFileRoute } from '@tanstack/react-router';
import { Tooltip } from '#examples/iconButtonGroup/tooltip';

export const Route = createFileRoute('/components/iconButtonGroup/tooltip')({
  component: () => <Tooltip />,
  staticData: {
    title: 'IconButtonGroup. Tooltip',
    description: '',
  },
});
