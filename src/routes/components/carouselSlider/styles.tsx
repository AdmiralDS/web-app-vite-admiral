import { createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';

import type { CarouselSliderProps } from '@admiral-ds/react-ui';
import { CarouselSlider, CarouselSliderItem } from '@admiral-ds/react-ui';
import { ExampleSection } from '../../-helpers/examples';
import styled from 'styled-components';

const SliderWrapper = styled.div<{ $appearance?: 'white' | 'dark' }>`
  box-sizing: border-box;
  padding: 22px 76px;
  border-radius: 4px;
  width: fit-content;
  background-color: ${(p) =>
    p.$appearance === 'white'
      ? `var(--admiral-color-Neutral_Neutral00, ${p.theme.color['Neutral/Neutral 00']})`
      : p.$appearance === 'dark'
        ? `var(--admiral-color-Neutral_Neutral60, ${p.theme.color['Neutral/Neutral 60']})`
        : `var(--admiral-color-Neutral_Neutral05, ${p.theme.color['Neutral/Neutral 05']})`};
  ${(p) => p.$appearance === 'white' && `border: 1px solid var(--admiral-color-Neutral_Neutral20, ${p.theme.color['Neutral/Neutral 20']})`}
`;

export const CarouselSliderBasic = (props: CarouselSliderProps) => {
  const [currentDefault, setCurrentDefault] = useState(0);
  const handleCurrentDefaultChange = (newValue: number) => {
    setCurrentDefault(newValue);
  };

  const [currentPrimary, setCurrentPrimary] = useState(0);
  const handleCurrentPrimaryChange = (newValue: number) => {
    setCurrentPrimary(newValue);
  };

  return (
    <>
      <ExampleSection text="Вариация Default применяется в составе компонента Carousel только при работе с изображениями. Находится над картинкой и имеет внешнюю обводку толщиной 0,5px для видимости на светлом фоне." style={{ display: 'flex', gap: '20px' }}>
        <SliderWrapper $appearance="dark">
          <CarouselSlider {...props}>
            {[...Array(5).keys()].map((item) => {
              return (
                <CarouselSliderItem
                  aria-label={`Item ${item}`}
                  key={item}
                  isCurrent={item === currentDefault}
                  onClick={() => handleCurrentDefaultChange(item)}
                />
              );
            })}
          </CarouselSlider>
        </SliderWrapper>
        <SliderWrapper $appearance="white">
          <CarouselSlider {...props}>
            {[...Array(5).keys()].map((item) => {
              return (
                <CarouselSliderItem
                  aria-label={`Item ${item}`}
                  key={item}
                  isCurrent={item === currentDefault}
                  onClick={() => handleCurrentDefaultChange(item)}
                />
              );
            })}
          </CarouselSlider>
        </SliderWrapper>
      </ExampleSection>
      <ExampleSection text="Вариация Primary применяется и как отдельный компонент, и в составе компонента Carousel, в таком случае слайдер располагается вне контента, снизу от него.">
        <SliderWrapper>
          <CarouselSlider {...props}>
            {[...Array(5).keys()].map((item) => {
              return (
                <CarouselSliderItem
                  appearance="primary"
                  aria-label={`Item ${item}`}
                  key={item}
                  isCurrent={item === currentPrimary}
                  onClick={() => handleCurrentPrimaryChange(item)}
                />
              );
            })}
          </CarouselSlider>
        </SliderWrapper>
      </ExampleSection>
    </>
  );
};

export const Route = createFileRoute('/components/carouselSlider/styles')({
  component: () => <CarouselSliderBasic />,
  staticData: {
    title: 'CarouselSlider. Стили',
    description: '',
  },
});
