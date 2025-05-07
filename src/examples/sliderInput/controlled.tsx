import { ExampleSection, PStyled } from '#examples/-helpers';
import { SliderInput } from '@admiral-ds/react-ui';
import { useState } from 'react';

export const SliderInputControlled = () => {
  const [slider1, setSlider1] = useState('0');

  return (
    <>
      <ExampleSection
        text={
          <>
            <PStyled>
              В качестве значений параметров value и defaultValue в SliderInput необходимо передавать уже
              отформатированную строку с разделителями тысяч (суффикс/префикс в value/defaultValue вносить не нужно).
            </PStyled>
            <PStyled>
              Если вы используете контролируемый SliderInput, то в качестве значения value вам досточно указывать
              event.target.value, где event - это нативное событие инпута, передаваемое к качестве параметра в колбек
              onChange. Также в колбек onChange передаются параметры fullStr и shortStr, однако в будущем планируется
              убрать их и оставить только event по аналогии с api стандартного html-инпута.
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
        <SliderInput
          value={slider1}
          onChange={(full, short, event) => {
            // eslint-disable-next-line no-console
            console.log({ full, short, event });
            setSlider1(event.target.value);
          }}
        />
      </ExampleSection>
    </>
  );
};
