import { createFileRoute } from '@tanstack/react-router';
import { StepperCustom } from '#examples/stepper/custom';

export const Route = createFileRoute('/components/stepper/custom')({
  component: () => <StepperCustom />,
  staticData: {
    title: 'Stepper. Кастомный StepContent',
  },
});
