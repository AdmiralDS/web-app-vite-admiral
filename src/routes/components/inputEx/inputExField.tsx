import { createFileRoute } from '@tanstack/react-router';
import { ExampleSection, PStyled } from '../../-helpers/examples';
import { InputExField } from '@admiral-ds/react-ui';
import { useState } from 'react';

export const Template = () => {
  const [localValue, setValue] = useState('');

  return (
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
      <InputExField
        label="label"
        extraText="extraText"
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

export const Route = createFileRoute('/components/inputEx/inputExField')({
  component: () => <Template />,
  staticData: {
    title: 'InputExField. Базовый пример',
  },
});
