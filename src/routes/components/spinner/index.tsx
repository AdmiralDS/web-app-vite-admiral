import { createFileRoute } from '@tanstack/react-router';
import { SpinnerBasic } from '#examples/spinner';

export const Route = createFileRoute('/components/spinner/')({
  component: () => <SpinnerBasic />,
  staticData: {
    title: 'Spinner. Базовый пример',
  },
});
