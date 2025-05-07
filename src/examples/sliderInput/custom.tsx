import { ExampleSection } from '#examples/-helpers';
import { SliderInput } from '@admiral-ds/react-ui';

export const SliderInputCustom = () => {
  return (
    <>
      <ExampleSection text="Пример кастомизирования текстовых подписей к отметкам слайдера.">
        <SliderInput
          defaultValue="15 000"
          // eslint-disable-next-line no-console
          onChange={(full, short, event) => console.log({ full, short, event })}
          renderTickMark={(mark: string) => mark + ' ₽'}
          tickMarks={[5000, 10000, 15000]}
          maxValue={20000}
        />
      </ExampleSection>
      <ExampleSection text="Пример изменения настроек (suffix, precision, thousand).">
        <SliderInput
          defaultValue="5.000"
          // eslint-disable-next-line no-console
          onChange={(full, short, event) => console.log({ full, short, event })}
          suffix="$"
          thousand=","
          decimal="."
          precision={3}
          placeholder="0.000 $"
        />
      </ExampleSection>
    </>
  );
};
