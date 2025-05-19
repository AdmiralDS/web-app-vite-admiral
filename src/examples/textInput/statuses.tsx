import { ChangeEvent } from 'react';
import { InputField } from '@admiral-ds/react-ui';
import { ExampleSection } from '#examples/-helpers';

export const TextInputStatuses = () => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    console.log(inputValue);
  };
  return (
    <>
      <ExampleSection text="Error">
        <InputField
          defaultValue="Default Value"
          onChange={handleChange}
          status="error"
          label="Лэйбл"
          extraText="Дополнительный текст"
        />
      </ExampleSection>
      <ExampleSection text="Success">
        <InputField
          defaultValue="Default Value"
          onChange={handleChange}
          status="success"
          label="Лэйбл"
          extraText="Дополнительный текст"
        />
      </ExampleSection>
    </>
  );
};
