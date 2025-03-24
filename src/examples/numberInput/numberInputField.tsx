import { ExampleSection, PStyled } from '#examples/-helpers';
import { clearValue, NumberInputField, NumberInputFieldProps } from '@admiral-ds/react-ui';
import { useState } from 'react';

function convertStrToNum(str: string, precision: number, decimal: string) {
  return Number(clearValue(str, precision, decimal).replace(decimal, '.'));
}

export const Field = () => {
  const [status, setStatus] = useState<NumberInputFieldProps['status'] | undefined>(undefined);
  const [extraText, setExtraText] = useState('extraText');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const numValue = convertStrToNum(event.target.value, 0, '.');
    if (event.target.value && numValue > 10000) {
      setStatus('error');
      setExtraText('Достигнуто максимальное значение');
    } else {
      setStatus(undefined);
      setExtraText('extraText');
    }
  };

  return (
    <>
      <ExampleSection
        text={
          <>
            <PStyled>
              Компоненту можно прокидывать дата аттрибуты вида [data-container-...]. Этот аттрибут попадет только на
              контейнер самого компонента.
            </PStyled>
            <PStyled>
              Например: data-container-id="fieldIdOne" - контейнер компонента получит аттрибут
              data-container-id="fieldIdOne", на нативный input этот аттрибут прокинут не будет.
            </PStyled>
          </>
        }
      >
        <NumberInputField
          data-container-id="numberInputFieldIdOne"
          maxValue={10000}
          defaultValue={2000}
          onChange={handleChange}
          label="label"
          precision={0}
          decimal="l"
          status={status}
          extraText={extraText}
        />
      </ExampleSection>
    </>
  );
};
