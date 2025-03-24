import { createFileRoute } from '@tanstack/react-router';
import { ProgressStepperScenario } from '#examples/progressStepper/scenario';

export const Route = createFileRoute('/components/progressStepper/scenario')({
  component: () => <ProgressStepperScenario />,
  staticData: {
    title: 'ProgressStepper. Сценарий прогресса',
  },
});
