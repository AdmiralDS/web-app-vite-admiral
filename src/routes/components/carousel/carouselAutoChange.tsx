import { createFileRoute } from '@tanstack/react-router';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

import type { CarouselProps } from '@admiral-ds/react-ui';
import { Carousel } from '@admiral-ds/react-ui';
import { ExampleSection } from '../../-helpers/examples';

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
    <ExampleSection
      text="Переключение сегментов может быть автоматическим через заданный пользователем интервал. Дефолтное значение
            интервала равно 3 секундам. Так же можно переключать контент кликами по не активным сегментам. В этом случае
            при наведении курсора на область компонента рекомендуется приостанавливать автоматическую смену до того
            момента, пока курсор не покинет область компонента."
    >
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
    </ExampleSection>
  );
};

export const Route = createFileRoute('/components/carousel/carouselAutoChange')({
  component: () => <CarouselAutoChange />,
  staticData: {
    title: 'Carousel. Автоматическое переключение',
    description: '',
  },
});
