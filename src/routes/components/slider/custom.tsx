import { createFileRoute } from '@tanstack/react-router';
import { SliderCustom } from '#examples/slider/custom';

export const Route = createFileRoute('/components/slider/custom')({
  component: () => <SliderCustom />,
  staticData: {
    title: 'Slider. C отметками и кастомизированными подписями к ним',
  },
});
