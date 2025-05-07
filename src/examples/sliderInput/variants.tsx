import { ExampleSection } from '#examples/-helpers';
import { SliderInput } from '@admiral-ds/react-ui';

export const SliderInputVariants = () => {
  return (
    <>
      <ExampleSection text="Слайдер с двумя значениями используется для произвольного выбора любого значения из заданного диапазона.">
        <SliderInput
          defaultValue="5"
          // eslint-disable-next-line no-console
          onChange={(full, short, event) => console.log({ full, short, event })}
        />
      </ExampleSection>
      <ExampleSection text="Слайдер с тремя и более значениями используется для выбора из  набора заданных значений. В компоненте можно выбрать от 3 до 5 значений. Слайдер “притягивается” к ближайшему значению. Также можно кликать на заданные значения.">
        <SliderInput
          defaultValue="15"
          // eslint-disable-next-line no-console
          onChange={(full, short, event) => console.log({ full, short, event })}
          tickMarks={[5, 10, 15]}
        />
      </ExampleSection>
    </>
  );
};
