import { ExampleSection } from '#examples/-helpers';
import { NumberInput } from '@admiral-ds/react-ui';

export const NumberInputSizes = () => {
  return (
    <>
      <ExampleSection text="Размер S">
        <NumberInput
          dimension="s"
          prefix="От"
          suffix="₽"
          placeholder="От 0 ₽"
          defaultValue="2,00"
          onChange={(event) => {
            console.log(event.target.value);
          }}
        />
      </ExampleSection>
      <ExampleSection text="Размер M">
        <NumberInput
          dimension="m"
          prefix="От"
          suffix="₽"
          placeholder="От 0 ₽"
          defaultValue="2,00"
          onChange={(event) => {
            console.log(event.target.value);
          }}
        />
      </ExampleSection>
      <ExampleSection text="Размер XL">
        <NumberInput
          dimension="xl"
          prefix="От"
          suffix="₽"
          placeholder="От 0 ₽"
          defaultValue="2,00"
          onChange={(event) => {
            console.log(event.target.value);
          }}
        />
      </ExampleSection>
    </>
  );
};
