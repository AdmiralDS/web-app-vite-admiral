import { createFileRoute } from '@tanstack/react-router';
import { SuggestInputUncontrolled } from '#examples/suggestInput/uncontrolled';

export const Route = createFileRoute('/components/suggestInput/uncontrolled')({
  component: () => <SuggestInputUncontrolled />,
  staticData: {
    title: 'SuggestInput. Неконтролируемый режим',
  },
});
