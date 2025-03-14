import { createFileRoute } from '@tanstack/react-router';
import { CarouselSliderAutoChange } from '#examples/carouselSlider/carouselSliderAutoChange';

export const Route = createFileRoute('/components/carouselSlider/carouselSliderAutoChange')({
  component: () => <CarouselSliderAutoChange />,
  staticData: {
    title: 'CarouselSlider. Автоматическое переключение',
    description: '',
  },
});
