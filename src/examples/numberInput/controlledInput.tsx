import { ExampleSection, PStyled } from '#routes/-helpers/examples';
import { clearValue, NumberInput } from '@admiral-ds/react-ui';
import { useState } from 'react';

function declOfNum(n: number, text_forms: Array<string>) {
  n = Math.abs(n) % 100;
  const n1 = n % 10;
  if (n > 10 && n < 20) {
    return text_forms[2];
  }
  if (n1 > 1 && n1 < 5) {
    return text_forms[1];
  }
  if (n1 == 1) {
    return text_forms[0];
  }
  return text_forms[2];
}

export const NumberInputControlled = () => {
  const [value1, setValue1] = useState<string | undefined>('50,00');
  const [value2, setValue2] = useState<string | undefined>('1');
  const [suffix, setSuffix] = useState('минута');

  return (
    <>
      <ExampleSection
        text={
          <>
            <PStyled>
              В качестве значений параметров value и defaultValue в NumberInput необходимо передавать уже
              отформатированную строку с разделителями тысяч (суффикс/префикс в value/defaultValue вносить не нужно).
            </PStyled>
            <PStyled>
              Если вы используете контролируемый NumberInput, то в качестве значения value вам досточно указывать
              event.target.value, где event - это нативное событие инпута, передаваемое к качестве параметра в колбек
              onChange.
            </PStyled>
            <PStyled>
              Кроме того, библиотека предоставляет утилиту fitToCurrency, которая возвращает строку отформатированную в
              денежном формате. В качестве параметров данная утилита принимает value - значение, которое надо
              отформатировать, а также параметры precision, decimal, thousand. Также библиотека предоставляет утилиту
              clearValue, которая возвращает входную строку, из которой удалены все символы кроме цифр, символа decimal
              и минуса.
            </PStyled>
          </>
        }
      >
        <NumberInput
          value={value1}
          onChange={(event) => {
            console.log(event.target.value);
            setValue1(event.target.value);
          }}
          prefix="От"
          suffix="₽"
          placeholder="От 0 ₽"
        />
      </ExampleSection>{' '}
      <ExampleSection>
        <NumberInput
          value={value2}
          onChange={(event) => {
            console.log(event.target.value);
            setValue2(event.target.value);
            setSuffix(declOfNum(Number(clearValue(event.target.value, 0)), ['минута', 'минуты', 'минут']));
          }}
          suffix={suffix}
          precision={0}
          placeholder="0 минут"
        />
      </ExampleSection>
    </>
  );
};
