import { ExampleSection, PStyled } from '#examples/-helpers';
import { SliderRange, SliderRangeField } from '@admiral-ds/react-ui';

export const SliderRangeInputBasic = () => {
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
              Поле ввода с двойным слайдером позволяет выбирать диапазон внутри обозначенного диапазона значений. Так же
              возможен ввод вручную.
            </PStyled>
            <PStyled>
              В диапозон может быть добавлено любое значение: рубли, доллары, деревья, дни и тп.
            </PStyled>
          </>
        }
      >
        <SliderRange
          defaultValue={['1', '5']}
          onChange={handleChange}
        />
      </ExampleSection>
      <ExampleSection
        text={
          <>
            <PStyled>
              Для того, чтобы добавть лэйбл или дополнительный текст, используйте компонент SliderRangeField
            </PStyled>
          </>
        }
      >
        <SliderRangeField
          defaultValue={['1', '5']}
          onChange={handleChange}
          label="Лэйбл"
          extraText="Дополнительный текст"
        />
      </ExampleSection>
    </>
  );
};
