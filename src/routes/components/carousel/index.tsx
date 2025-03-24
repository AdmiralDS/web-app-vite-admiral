import { createFileRoute } from '@tanstack/react-router';
import { CarouselBasic } from '#examples/carousel';

export const Route = createFileRoute('/components/carousel/')({
  component: () => <CarouselBasic />,
  staticData: {
    title: 'Carousel. Базовый пример',
    description:
      'Компонент для последовательного отображения связанных по смыслу элементов, как правило, это изображения или карточки с контентом.',
  },
});
