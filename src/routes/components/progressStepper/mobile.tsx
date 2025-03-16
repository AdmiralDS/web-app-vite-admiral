import { createFileRoute } from '@tanstack/react-router';
import { ProgressStepperMobile } from '#examples/progressStepper/mobile';

export const Route = createFileRoute('/components/progressStepper/mobile')({
  component: () => <ProgressStepperMobile />,
  staticData: {
    title: 'ProgressStepper. Адаптив (mobile)',
  },
});
