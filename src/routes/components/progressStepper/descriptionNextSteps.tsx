import { createFileRoute } from '@tanstack/react-router';
import { ProgressStepperNextStep } from '#examples/progressStepper/descriptionNextSteps';

export const Route = createFileRoute('/components/progressStepper/descriptionNextSteps')({
  component: () => <ProgressStepperNextStep />,
  staticData: {
    title: 'ProgressStepper. Примеры настройки подписи о следующем шаге',
  },
});
