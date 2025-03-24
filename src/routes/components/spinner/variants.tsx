import { createFileRoute } from '@tanstack/react-router';
import { SpinnerVariants } from '#examples/spinner/variants';

export const Route = createFileRoute('/components/spinner/variants')({
  component: () => <SpinnerVariants />,
  staticData: {
    title: 'Spinner. Варианты',
    description: 'Spinner имеет 2 варианта отображения на темном и светлом фоне',
  },
});
