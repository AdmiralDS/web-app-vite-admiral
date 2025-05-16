import { createFileRoute } from '@tanstack/react-router';
import { SuggestInputBasic } from '#examples/suggestInput';

export const Route = createFileRoute('/components/suggestInput/')({
  component: () => <SuggestInputBasic />,
  staticData: {
    title: 'SuggestInput. Базовый пример',
  },
});
