import { createFileRoute } from '@tanstack/react-router';
import { SpinnerWithOtherComponents } from '#examples/spinner/withOtherComponents';

export const Route = createFileRoute('/components/spinner/withOtherComponents')({
  component: () => <SpinnerWithOtherComponents />,
  staticData: {
    title: 'Spinner. В составе других компонентов',
  },
});
