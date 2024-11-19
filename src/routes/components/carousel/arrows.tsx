import { createFileRoute } from '@tanstack/react-router';
import styled from 'styled-components';

import type { CarouselProps } from '@admiral-ds/react-ui';
import { Carousel } from '@admiral-ds/react-ui';
import { ExampleSection } from '../../-helpers/examples';

const CarouselContainer = styled.div`
  width: 70%;
`;

export const CarouselArrows = (props: CarouselProps) => {
  return (
    <>
      <ExampleSection text="Активная зона работы кнопок равна 56 px по горизонтали и вся высота изображения по вертикали. При наведении на эту зону у кнопок появляется Hover.">
        <CarouselContainer>
          <Carousel {...props} infiniteScroll>
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
      <ExampleSection text="Опционально кнопки навигации можно отключать.">
        <CarouselContainer>
          <Carousel {...props} showButtons={false}>
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
    </>
  );
};

export const Route = createFileRoute('/components/carousel/arrows')({
  component: () => <CarouselArrows />,
  staticData: {
    title: 'Carousel. Листание слайдов',
    description:
      'Помимо кликов на слайдер, контент можно переключать кнопками стрелок влево и вправо. Прокрутка изображений идет «по кругу».',
  },
});
