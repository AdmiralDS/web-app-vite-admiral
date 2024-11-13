import { createFileRoute } from '@tanstack/react-router';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

import type { CarouselProps } from '@admiral-ds/react-ui';
import { Carousel, NotificationItem, NotificationItemContent } from '@admiral-ds/react-ui';
import { ContentArea } from '../../-helpers/examples';

const Separator = styled.div<{ height: number }>`
  height: ${(p) => p.height}px;
`;

const CarouselContainer = styled.div`
  width: 70%;
`;

const items = [
  <img key="1" src="https://www.fonstola.ru/images/201304/fonstola.ru_92517.jpg" alt="placeholder" />,
  <img key="2" src="https://masyamba.ru/картинки-котят/33-милый-котенок.jpg" alt="placeholder" />,
  <img key="3" src="https://en.free-wallpapers.su/data/media/2329/big/dog1650.jpg" alt="placeholder" />,
  <img
    key="4"
    src="https://furman.top/uploads/posts/2023-08/1691005855_furman-top-p-zastavka-na-rabochii-stol-kotiki-krasivo-36.jpg"
    alt="placeholder"
  />,
  <img
    key="5"
    src="https://wp-s.ru/wallpapers/5/1/315816524181182/troe-malenkix-shhenkov-xaski.jpg"
    alt="placeholder"
  />,
  <img key="6" src="https://www.fonstola.ru/images/201910/fonstola.ru_349629.jpg" alt="placeholder" />,
];

export const CarouselAutoChange = (props: CarouselProps) => {
  const [mouseInCarousel, setMouseInCarousel] = useState(false);
  const handleMouseEnterCarousel = () => setMouseInCarousel(true);
  const handleMouseLeaveCarousel = () => setMouseInCarousel(false);

  const [current, setCurrent] = useState(0);
  const handleCurrentItemChange = (newValue: number) => {
    setCurrent(newValue);
  };
  useEffect(() => {
    const timer = setInterval(() => {
      if (!mouseInCarousel) {
        setCurrent((prev) => (prev + 1) % items.length);
      }
    }, 3000);
    return () => clearInterval(timer);
  }, [setCurrent, mouseInCarousel]);

  return (
    <ContentArea>
      <CarouselContainer>
        <Carousel
          {...props}
          currentItem={current}
          onCurrentItemChange={handleCurrentItemChange}
          onMouseEnter={handleMouseEnterCarousel}
          onMouseLeave={handleMouseLeaveCarousel}
          infiniteScroll
          showButtons
        >
          {items}
        </Carousel>
      </CarouselContainer>
      <NotificationItem displayStatusIcon>
        <NotificationItemContent>
          Переключение секций может быть автоматическим через заданный пользователем интервал. Рекомендуемое значение
          интервала равно 3 секундам.
          <Separator height={8} />В этом случае при наведении курсора на область компонента рекомендуется
          приостанавливать автоматическую смену до того момента, пока курсор не покинет область компонента.
        </NotificationItemContent>
      </NotificationItem>
    </ContentArea>
  );
};

export const Route = createFileRoute('/components/carousel/carouselAutoChange')({
  component: () => <CarouselAutoChange />,
  staticData: {
    title: 'Carousel. Автоматическое переключение',
    description:
      'Компонент для последовательного отображения связанных по смыслу элементов, как правило, это изображения или карточки с контентом.',
  },
});
