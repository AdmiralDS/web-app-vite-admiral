import { createFileRoute } from '@tanstack/react-router';
import { ProgressStepperStepsNaming } from '#examples/progressStepper/stepsNaming';

export const Route = createFileRoute('/components/progressStepper/stepsNaming')({
  component: () => <ProgressStepperStepsNaming />,
  staticData: {
    title: 'ProgressStepper. Пример настройки названия шага',
  },
});
