import styled from 'styled-components';

import type { CarouselProps } from '@admiral-ds/react-ui';
import { Carousel } from '@admiral-ds/react-ui';
import { ExampleSection } from '#routes/-helpers/examples';

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

export const CarouselSliderPosition = (props: CarouselProps) => {
  return (
    <>
      <ExampleSection text="Слайдер внутри.">
        <CarouselContainer>
          <Carousel {...props} sliderPosition="inner">
            {items}
          </Carousel>
        </CarouselContainer>
      </ExampleSection>
      <ExampleSection text="Слайдер снаружи. В этом случае слайдер имеет appearance='primary'.">
        <CarouselContainer>
          <Carousel {...props} sliderPosition="outer" sliderAppearance="primary">
            {items}
          </Carousel>
        </CarouselContainer>
      </ExampleSection>
    </>
  );
};
