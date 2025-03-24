import { createFileRoute } from '@tanstack/react-router';
import { CarouselArrows } from '#examples/carousel/arrows';

export const Route = createFileRoute('/components/carousel/arrows')({
  component: () => <CarouselArrows />,
  staticData: {
    title: 'Carousel. Листание слайдов',
    description:
      'Помимо кликов на слайдер, контент можно переключать кнопками стрелок влево и вправо. Прокрутка изображений идет «по кругу».',
  },
});
