import { createFileRoute } from '@tanstack/react-router';
import { StepperOptions } from '#examples/stepper/options';

export const Route = createFileRoute('/components/stepper/options')({
  component: () => <StepperOptions />,
  staticData: {
    title: 'Stepper. Опции',
  },
});
