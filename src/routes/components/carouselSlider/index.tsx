import { createFileRoute } from '@tanstack/react-router';
import { CarouselSliderBasic } from '#examples/carouselSlider';

export const Route = createFileRoute('/components/carouselSlider/')({
  component: () => <CarouselSliderBasic />,
  staticData: {
    title: 'CarouselSlider. Базовый пример',
    description: '',
  },
});
