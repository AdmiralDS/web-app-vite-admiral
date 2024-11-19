import { createFileRoute } from '@tanstack/react-router';
import styled from 'styled-components';

import type { CarouselProps } from '@admiral-ds/react-ui';
import { Carousel } from '@admiral-ds/react-ui';
import { ExampleSection } from '../../-helpers/examples';

const Separator = styled.div<{ height: number }>`
  height: ${(p) => p.height}px;
`;

const CarouselContainer = styled.div`
  width: 70%;
`;

const Desc = () => (
  <>
    Может использоваться как «листалка» изображений или для просмотра условных карточек с контентом.
    <Separator height={8} />
    Размер и пропорции контентной зоны задаются пользователем.
    <Separator height={8} />
    Помимо кликов на слайдер, контент можно переключать кнопками стрелок влево и вправо. Прокрутка изображений идет «по
    кругу».
    <Separator height={8} />
    Активная зона работы кнопок равна 56 px по горизонтали и вся высота изображения по вертикали. При наведении на эту
    зону у кнопок появляется Hover.
    <Separator height={8} />
    Опционально кнопки навигации можно отключать.
    <Separator height={8} />
    При использовании для отображения условных карточек со светлым фоном, рекомендуется использовать слайдер снаружи
    компонента и переключить кнопки навигации на appearance = 'primary'.
    <Separator height={8} />
    Адаптив (Mobile) Компонент адаптируется к ширине экрана по горизонтали, пропорционально уменьшая высоту. Возможно
    «листание» свайпами по области изображения.
  </>
);

export const CarouselBasic = (props: CarouselProps) => {
  return (
    <ExampleSection text={<Desc />}>
      <CarouselContainer>
        <Carousel {...props}>
          <img key="1" src="https://www.fonstola.ru/images/201304/fonstola.ru_92517.jpg" alt="placeholder" />
          <img key="2" src="https://masyamba.ru/картинки-котят/33-милый-котенок.jpg" alt="placeholder" />
          <img key="3" src="https://en.free-wallpapers.su/data/media/2329/big/dog1650.jpg" alt="placeholder" />
          <img
            key="4"
            src="https://furman.top/uploads/posts/2023-08/1691005855_furman-top-p-zastavka-na-rabochii-stol-kotiki-krasivo-36.jpg"
            alt="placeholder"
          />
          <img
            key="5"
            src="https://wp-s.ru/wallpapers/5/1/315816524181182/troe-malenkix-shhenkov-xaski.jpg"
            alt="placeholder"
          />
          <img key="6" src="https://www.fonstola.ru/images/201910/fonstola.ru_349629.jpg" alt="placeholder" />
        </Carousel>
      </CarouselContainer>
    </ExampleSection>
  );
};

export const Route = createFileRoute('/components/carousel/')({
  component: () => <CarouselBasic />,
  staticData: {
    title: 'Carousel. Базовый пример',
    description:
      'Компонент для последовательного отображения связанных по смыслу элементов, как правило, это изображения или карточки с контентом.',
  },
});
