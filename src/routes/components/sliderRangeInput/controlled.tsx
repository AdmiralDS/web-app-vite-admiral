import { createFileRoute } from '@tanstack/react-router';
import { SliderRangeInputControlled } from '#examples/sliderRangeInput/controlled';

export const Route = createFileRoute('/components/sliderRangeInput/controlled')({
  component: () => <SliderRangeInputControlled />,
  staticData: {
    title: 'SliderRange. Контроллируемый инпут',
  },
});
