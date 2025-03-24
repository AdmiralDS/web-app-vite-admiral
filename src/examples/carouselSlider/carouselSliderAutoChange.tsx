import { useEffect, useState } from 'react';

import type { CarouselSliderProps } from '@admiral-ds/react-ui';
import { CarouselSlider, CarouselSliderItem } from '@admiral-ds/react-ui';
import { ExampleSection } from '#examples/-helpers';

export const CarouselSliderAutoChange = (props: CarouselSliderProps) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % 5);
    }, 3000);
    return () => clearInterval(timer);
  }, [setCurrent]);

  return (
    <ExampleSection text="Переключение сегментов может быть автоматическим через заданный пользователем интервал. Рекомендуемое значение интервала равно 3 секундам.">
      <CarouselSlider {...props}>
        {[...Array(5).keys()].map((item) => {
          return (
            <CarouselSliderItem
              aria-label={`Item ${item}`}
              key={item}
              appearance="primary"
              isCurrent={item === current}
            />
          );
        })}
      </CarouselSlider>
    </ExampleSection>
  );
};
