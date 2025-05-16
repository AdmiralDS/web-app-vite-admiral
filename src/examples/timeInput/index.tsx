import { ExampleSection, PStyled } from '#examples/-helpers';
import { TimeInput, Field } from '@admiral-ds/react-ui';
import { useState } from 'react';

export const TimeInputBasic = () => {
  const [localValue, setValue] = useState('');

  return (
    <>
      <ExampleSection
        text={
          <>
            <PStyled>
              Компонент для ввода-выбора времени. Поддерживается как ручной ввод, так и выбор через выпадющий список с
              фиксированным шагом в полчаса.
            </PStyled>
            <PStyled>
              Выпадающий список со значениями часов и минут представлен в библитеке в разделе:Dropdown - Time Picker.
              Компонент имеет три размера в соответствии с размерами полей ввода. Компонент (сам dropdown) нельзя
              изменять по ширине.
            </PStyled>
            <PStyled>
              По дефолту в выпадающем меню стоит шаг в 30 минут, но вы можете устанавливать свои произвольные интервалы.
            </PStyled>
          </>
        }
      >
        <TimeInput
          style={{ maxWidth: '320px' }}
          value={localValue}
          onChange={(e) => setValue(e.currentTarget.value)}
          dropContainerClassName="dropContainerClass"
        />
      </ExampleSection>
      <ExampleSection text="Компонент с лэйблом">
        <Field label="Введите время" extraText="Дополнительный текст">
          <TimeInput
            style={{ maxWidth: '320px' }}
            value={localValue}
            onChange={(e) => setValue(e.currentTarget.value)}
            dropContainerClassName="dropContainerClass"
          />
        </Field>
      </ExampleSection>
    </>
  );
};
