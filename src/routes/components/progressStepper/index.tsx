import { createFileRoute } from '@tanstack/react-router';
import { ProgressStepperBasic } from '#examples/progressStepper';

export const Route = createFileRoute('/components/progressStepper/')({
  component: () => <ProgressStepperBasic />,
  staticData: {
    title: 'ProgressStepper. Базовый пример',
  },
});
