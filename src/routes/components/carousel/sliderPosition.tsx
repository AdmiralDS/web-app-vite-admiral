import { createFileRoute } from '@tanstack/react-router';
import { CarouselSliderPosition } from '#examples/carousel/sliderPosition';

export const Route = createFileRoute('/components/carousel/sliderPosition')({
  component: () => <CarouselSliderPosition />,
  staticData: {
    title: 'Carousel. Позиция слайдера',
    description:
      'Есть два типа карусели — со слайдером внутри и со слайдером снаружи. Основное назначение компонента — показ изображений.',
  },
});
