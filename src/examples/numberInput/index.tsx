import { ExampleSection, PStyled } from '#examples/-helpers';
import { NumberInput } from '@admiral-ds/react-ui';

export const NumberInputBasic = () => {
  return (
    <>
      <ExampleSection
        text={
          <>
            <PStyled>
              Пользователь может указать, с какой точностью компонент должен выводить число (сколько разрядов должно
              быть в дробной части числа). В этом случае при потере фокуса, если число содержит не все разряды в дробной
              части или дробная часть отсутствует, недостающее количество разрядов должно быть заполнено нулями. В
              качестве суффикса может быть любое значение (метры, деревья, дни и тд).
            </PStyled>
            <PStyled>
              Компонент позволяет вводить любые числовые значения, в том числе больше-меньше указанного диапазона.
              Валидацию и корректировку числовых значений предполагается выполнять на стороне пользователя.
            </PStyled>
          </>
        }
      >
        <NumberInput
          prefix="От"
          suffix="₽"
          placeholder="От 0 ₽"
          defaultValue="2,00"
          onChange={(event) => {
            console.log(event.target.value);
          }}
        />
      </ExampleSection>
    </>
  );
};
