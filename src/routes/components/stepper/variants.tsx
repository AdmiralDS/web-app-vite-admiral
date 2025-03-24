import { createFileRoute } from '@tanstack/react-router';
import { StepperVariants } from '#examples/stepper/variants';

export const Route = createFileRoute('/components/stepper/variants')({
  component: () => <StepperVariants />,
  staticData: {
    title: 'Stepper. Варианты отображения строк',
  },
});
