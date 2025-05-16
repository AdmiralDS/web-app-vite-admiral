import { createFileRoute } from '@tanstack/react-router';
import { SuggestInputField } from '#examples/suggestInput/field';

export const Route = createFileRoute('/components/suggestInput/field')({
  component: () => <SuggestInputField />,
  staticData: {
    title: 'SuggestField. Базовый пример',
  },
});
