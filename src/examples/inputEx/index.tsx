import { ExampleSection, PStyled } from '#examples/-helpers';
import { InputEx } from '@admiral-ds/react-ui';
import { useState } from 'react';

export const InputExBasic = () => {
  const [localValue, setValue] = useState('');

  return (
    <ExampleSection
      text={
        <>
          <PStyled>
            Компонент для ввода текста с нередактируемым текстовым полем (Prefix, Prefix Select, Suffix или Suffix
            Select с возможностью выбора значения), для контекстного отображения типа вводимой информации. Например, в
            роли суффикса может быть вводимая валюта – RUB, USD, EUR и тд.
          </PStyled>
          <PStyled>Размеры полей Prefix и Suffix зависят от количества знаков в этих полях.</PStyled>
        </>
      }
    >
      <InputEx
        value={localValue}
        onChange={(e) => setValue(e.currentTarget.value)}
        prefixValue="Prefix"
        suffixValue="Suffix"
        placeholder="Placeholder"
        style={{ width: '400px' }}
      />
    </ExampleSection>
  );
};
