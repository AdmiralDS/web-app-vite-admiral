import { createFileRoute } from '@tanstack/react-router';
import { StepperState } from '#examples/stepper/state';

export const Route = createFileRoute('/components/stepper/state')({
  component: () => <StepperState />,
  staticData: {
    title: 'Stepper. Состояния',
  },
});
