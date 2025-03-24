import { createFileRoute } from '@tanstack/react-router';
import { CarouselSliderStyles } from '#examples/carouselSlider/styles';

export const Route = createFileRoute('/components/carouselSlider/styles')({
  component: () => <CarouselSliderStyles />,
  staticData: {
    title: 'CarouselSlider. Стили',
    description: '',
  },
});
