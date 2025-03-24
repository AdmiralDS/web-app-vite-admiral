import { createFileRoute } from '@tanstack/react-router';
import { StepperAdaptive } from '#examples/stepper/adaptive';

export const Route = createFileRoute('/components/stepper/adaptive')({
  component: () => <StepperAdaptive />,
  staticData: {
    title: 'Stepper. Адаптив',
  },
});
