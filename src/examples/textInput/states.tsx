import { ChangeEvent } from 'react';
import { TextInput } from '@admiral-ds/react-ui';
import { ExampleSection } from '#examples/-helpers';

export const TextInputState = () => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    console.log(inputValue);
  };
  return (
    <>
      <ExampleSection text="Disabled">
        <TextInput defaultValue="Default Value" onChange={handleChange} disabled />
      </ExampleSection>
      <ExampleSection text="Read Only">
        <TextInput defaultValue="Default Value" onChange={handleChange} readOnly />
      </ExampleSection>
      <ExampleSection text="Skeleton">
        <TextInput defaultValue="Default Value" onChange={handleChange} skeleton />
      </ExampleSection>
      <ExampleSection text="Disable copying">
        <TextInput defaultValue="Default Value" onChange={handleChange} disableCopying />
      </ExampleSection>
      <ExampleSection text="С индикатором загрузки (Spiner).">
        <TextInput
          displayClearIcon
          placeholder="идет поиск ..."
          isLoading
        />
      </ExampleSection>
    </>
  );
};
