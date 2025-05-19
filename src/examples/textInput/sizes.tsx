import { ChangeEvent } from 'react';
import { TextInput } from '@admiral-ds/react-ui';
import { ExampleSection } from '#examples/-helpers';

export const TextInputSizes = () => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    console.log(inputValue);
  };
  return (
    <>
      <ExampleSection text="Размер XL">
        <TextInput
          defaultValue="Default Value"
          onChange={handleChange}
          dimension="xl"
        />
      </ExampleSection>
      <ExampleSection text="Размер M">
        <TextInput
          defaultValue="Default Value"
          onChange={handleChange}
          dimension="m"
        />
      </ExampleSection>
      <ExampleSection text="Размер S">
        <TextInput
          defaultValue="Default Value"
          onChange={handleChange}
          dimension="s"
        />
      </ExampleSection>
    </>
  );
};
