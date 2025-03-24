import { createFileRoute } from '@tanstack/react-router';
import { CarouselAutoChange } from '#examples/carousel/carouselAutoChange';

export const Route = createFileRoute('/components/carousel/carouselAutoChange')({
  component: () => <CarouselAutoChange />,
  staticData: {
    title: 'Carousel. Автоматическое переключение',
    description: '',
  },
});
