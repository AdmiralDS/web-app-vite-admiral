import { ExampleSection, PStyled } from '#examples/-helpers';
import { SliderRange } from '@admiral-ds/react-ui';
import { useState } from 'react';

export const SliderRangeInputControlled = () => {
  const [value, setValue] = useState<[string, string]>(['2,0', '5,0']);
  const handleChange = (value: [{ str: string; num: number }, { str: string; num: number }]) => {
    console.log(value);
    setValue([value[0].str, value[1].str]);
  };

  return (
    <>
      <ExampleSection
        text={
          <>
            <PStyled>
              В качестве значений параметров value и defaultValue в SliderRange необходимо передавать уже
              отформатированные строки с разделителями тысяч (суффикс/префикс в value/defaultValue вносить не нужно).
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
        <SliderRange
          value={value}
          onChange={handleChange}
          /* onChange={(
            value: [{ str: string; num: number }, { str: string; num: number }],
            event: React.ChangeEvent<HTMLInputElement>,
          ) => {
            // eslint-disable-next-line no-console
            console.log(value, event);
            setValue([value[0].str, value[1].str]);
          }} */
          prefix={['От', 'До']}
          suffix="₽"
          placeholder={['От 0,0 ₽', 'До 0,0 ₽']}
          precision={1}
        />
      </ExampleSection>
    </>
  );
};
