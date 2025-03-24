import { createFileRoute } from '@tanstack/react-router';
import { MultiSelectExpandedHeight } from '#examples/select/multiSelectExpandedHeight';

export const Route = createFileRoute('/components/select/multiSelectExpandedHeight')({
  component: () => <MultiSelectExpandedHeight />,
  staticData: {
    title: 'mode="multiple" с увеличенной по умолчанию высотой',
  },
});
