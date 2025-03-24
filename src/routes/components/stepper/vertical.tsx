import { createFileRoute } from '@tanstack/react-router';
import { StepperVertical } from '#examples/stepper/vertical';

export const Route = createFileRoute('/components/stepper/vertical')({
  component: () => <StepperVertical />,
  staticData: {
    title: 'Stepper. Вертикальный',
  },
});
