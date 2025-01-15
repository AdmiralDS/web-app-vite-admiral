import { createFileRoute } from '@tanstack/react-router';
import { ExampleSection, PStyled } from '../../-helpers/examples';
import { useState } from 'react';
import { Slider } from '@admiral-ds/react-ui';

export const Template = () => {
  const [rangeValue, setRangeValue] = useState(0);

  return (
    <>
      <ExampleSection
        text={
          <>
            <PStyled>
              Слайдер с двумя значениями используется для произвольного выбора любого значения из заданного диапазона.
            </PStyled>
            <PStyled>
              Слайдер с тремя и более значениями используется для выбора из набора заданных значений. В компоненте можно
              выбрать от 3 до 5 значений. Слайдер “притягивается” к ближайшему значению. Так же можно кликать на
              заданные значения.
            </PStyled>
          </>
        }
      >
        <Slider
          value={rangeValue}
          onChange={(e: React.SyntheticEvent, value: number) => {
            // eslint-disable-next-line no-console
            console.log({ event: e.type, value });
            setRangeValue(value);
          }}
        />
      </ExampleSection>
    </>
  );
};

export const Route = createFileRoute('/components/slider/')({
  component: () => <Template />,
  staticData: {
    title: 'Slider. Базовый пример',
  },
});
