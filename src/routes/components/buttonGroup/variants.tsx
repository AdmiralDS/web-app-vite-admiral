import { createFileRoute } from '@tanstack/react-router';
import { ButtonGroupVariants } from '#examples/buttonGroup/variants';

export const Route = createFileRoute('/components/buttonGroup/variants')({
  component: () => <ButtonGroupVariants />,
  staticData: {
    title: 'ButtonGroup. Варианты.',
    description: '',
  },
});
