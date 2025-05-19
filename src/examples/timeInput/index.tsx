import { ExampleSection, PStyled } from '#examples/-helpers';
import { TimeInput, TimeField } from '@admiral-ds/react-ui';
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
      <ExampleSection text="Для того, чтобы добавить лэйбл или дополнительный текст, используйте компонент TimeField">
        <TimeField
          label="Введите время"
          extraText="Дополнительный текст"
          style={{ maxWidth: '320px' }}
          value={localValue}
          onChange={(e) => setValue(e.currentTarget.value)}
          dropContainerClassName="dropContainerClass"
        />
      </ExampleSection>
    </>
  );
};
