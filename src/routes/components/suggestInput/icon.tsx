import { createFileRoute } from '@tanstack/react-router';
import { SuggestInputIcon } from '#examples/suggestInput/icon';

export const Route = createFileRoute('/components/suggestInput/icon')({
  component: () => <SuggestInputIcon />,
  staticData: {
    title: 'SuggestInput. Альтернативная иконка',
  },
});
