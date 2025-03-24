import { createFileRoute } from '@tanstack/react-router';
import { LinkAsProp } from '#examples/link/asProp';

export const Route = createFileRoute('/components/link/asProp')({
  component: () => <LinkAsProp />,
  staticData: {
    title: 'Link. Link As Prop',
    description:
      'Компонент Link является полиморфным компонентом. По умолчанию компонент Link возвращает стандартный html anchor элемент. Однако с помощью параметра as можно перезадать тип элемента, который будет отрисован. В качестве значения as можно передать строку, в которой будет прописан тип html элемента, или компонент.',
  },
});
