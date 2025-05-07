import { createFileRoute } from '@tanstack/react-router';
import { SliderInputControlled } from '#examples/sliderInput/controlled';

export const Route = createFileRoute('/components/sliderInput/controlled')({
  component: () => <SliderInputControlled />,
  staticData: {
    title: 'SliderInput. Контроллируемый инпут',
  },
});
