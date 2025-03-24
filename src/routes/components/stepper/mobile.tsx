import { createFileRoute } from '@tanstack/react-router';
import { StepperMobile } from '#examples/stepper/mobile';

export const Route = createFileRoute('/components/stepper/mobile')({
  component: () => <StepperMobile />,
  staticData: {
    title: 'Stepper. Мобильная версия',
  },
});
