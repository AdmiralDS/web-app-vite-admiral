import { ExampleSection, PStyled } from '#examples/-helpers';
import { clearValue, NumberInput, NumberInputProps } from '@admiral-ds/react-ui';
import { useState } from 'react';

function convertStrToNum(str: string, precision: number, decimal: string) {
  return Number(clearValue(str, precision, decimal).replace(decimal, '.'));
}

export const NumberInputMinMaxValue = () => {
  const [status, setStatus] = useState<NumberInputProps['status'] | undefined>(undefined);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const numValue = convertStrToNum(event.target.value, 2, ',');
    if (event.target.value && (numValue < -1000 || numValue > 2000)) {
      setStatus('error');
    } else {
      setStatus(undefined);
    }
  };

  return (
    <>
      <ExampleSection
        text={
          <>
            <PStyled>
              Параметры максимальное (maxValue) и минимальное (minValue) значение применяются для того, чтобы обозначить
              диапазон допустимых чисел для ввода. При достижении лимита, кнопки “+” или “-” принимают состояние
              Disabled.
            </PStyled>
            <PStyled>
              Если вручную введенное значение больше или меньше указанного диапазона, то автокоррекции значения при
              выводе фокуса из поля не происходит (в предыдущей реализации, от которой библиотека отказалась, значение
              автоматически корректировалось, принимая наиболее близкое значение из допустимого диапазона).
              Предполагается, что необходимая валидация и корректировка значения будут происходить на стороне
              пользователя.
            </PStyled>
            <PStyled>Также, если minValue {'>'}= 0, то ввод знака минус блокируется.</PStyled>
            <PStyled>
              В данном примере, если введенное значение выходит за границы диапазона minValue-maxValue, компонент
              переходит в состояние ошибки.
            </PStyled>
          </>
        }
      >
        <NumberInput
          onChange={handleChange}
          minValue={-1000}
          maxValue={2000}
          status={status}
          precision={2}
          decimal={','}
          placeholder="Введите число"
        />
      </ExampleSection>
    </>
  );
};
