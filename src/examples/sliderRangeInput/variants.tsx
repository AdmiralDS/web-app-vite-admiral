import { ExampleSection, PStyled } from '#examples/-helpers';
import { SliderRange } from '@admiral-ds/react-ui';

export const SliderRangeInputVariants = () => {
  const handleChange = (
    value: [{ str: string; num: number }, { str: string; num: number }],
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    console.log(value, event);
  };

  return (
    <>
      <ExampleSection
        text={
          <>
            <PStyled>
              При вводе числа не входящего в допустимый диапазон, после вывода фокуса из поля, оно принимает максимально
              близкое к допустимому значение.
            </PStyled>
            <PStyled>
              Также, при вводе в первом поле значения большего, чем во втором (и наоборот), после вывода фокуса число
              становится максимально близким к допустимому.
            </PStyled>
            <PStyled>Минимальная разница в полях ввода равна одной условной единице.</PStyled>
            <PStyled>Слайдеры могут заходить друг за друга, в этом случае они меняются местами</PStyled>
          </>
        }
      >
        <SliderRange defaultValue={['1', '5']} onChange={handleChange} />
      </ExampleSection>
    </>
  );
};
