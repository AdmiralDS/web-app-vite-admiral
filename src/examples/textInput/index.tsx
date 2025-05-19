import { ChangeEvent } from 'react';
import { TextInput, InputField } from '@admiral-ds/react-ui';
import { ExampleSection, PStyled } from '#examples/-helpers';

export const TextInputBasic = () => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    console.log(inputValue);
  };
  return (
    <>
      <ExampleSection
        text={
          <>
            <PStyled>
              TextInput – простой текстовый инпут.
            </PStyled>
          </>
        }
      >
        <TextInput
          defaultValue="Default Value"
          onChange={handleChange}
        />
      </ExampleSection>
      <ExampleSection
        text={
          <>
            <PStyled>
              Для того, чтобы добавть лэйбл или дополнительный текст, используйте компонент InputField.
            </PStyled>
          </>
        }
      >
        <InputField
          defaultValue="Default Value"
          onChange={handleChange}
          label="Лэйбл"
          extraText="Дополнительный текст"
        />
      </ExampleSection>
    </>
  );
};
