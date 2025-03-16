import { createFileRoute } from '@tanstack/react-router';
import { StepperBasic } from '#examples/stepper';

export const Route = createFileRoute('/components/stepper/')({
  component: () => <StepperBasic />,
  staticData: {
    title: 'Stepper. Базовый пример',
  },
});
