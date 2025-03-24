import { useState } from 'react';
import styled from 'styled-components';

import type { CarouselSliderProps } from '@admiral-ds/react-ui';
import { CarouselSlider, CarouselSliderItem } from '@admiral-ds/react-ui';
import { ExampleSection } from '#examples/-helpers';

const Separator = styled.div<{ height: number }>`
  height: ${(p) => p.height}px;
`;

const Desc = () => (
  <>
    Может использоваться отдельно и применяться в произвольных сценариях.
    <Separator height={8} />
    Более длинный сегмент слайдера обозначает текущее место прогресса.
    <Separator height={8} />
    Анимация. При переключении сегмента слайдера в состояние Active, сегмент удлиняется, параллельно активный сегмент
    сокращается, переходя в состояние Default. Таким образом ширина компонента всегда постоянна и не изменяется при
    переключении сегментов.
    <Separator height={8} />
    Контент можно переключать кликами по не активным сегментам.
    <Separator height={8} />
    Размер активной площади клика 18х16px.
    <Separator height={8} />
    Количество сегментов в слайдере регулируется пользователем. Минимальное количество — два сегмента.
  </>
);

export const CarouselSliderBasic = (props: CarouselSliderProps) => {
  const [current, setCurrent] = useState(0);
  const handleCurrentChange = (newValue: number) => {
    setCurrent(newValue);
  };

  return (
    <ExampleSection text={<Desc />}>
      <CarouselSlider {...props}>
        {[...Array(5).keys()].map((item) => {
          return (
            <CarouselSliderItem
              aria-label={`Item ${item}`}
              key={item}
              isCurrent={item === current}
              onClick={() => handleCurrentChange(item)}
              appearance="primary"
            />
          );
        })}
      </CarouselSlider>
    </ExampleSection>
  );
};
