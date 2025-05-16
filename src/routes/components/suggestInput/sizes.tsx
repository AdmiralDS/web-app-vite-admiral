import { createFileRoute } from '@tanstack/react-router';
import { SuggestInputSizes } from '#examples/suggestInput/sizes';

export const Route = createFileRoute('/components/suggestInput/sizes')({
  component: () => <SuggestInputSizes />,
  staticData: {
    title: 'SuggestInput. Размеры',
    description: 'Компонент SuggestInput представлен в 3 размерах S, M и XL',
  },
});
