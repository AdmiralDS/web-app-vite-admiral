import { ExampleSection } from '#routes/-helpers/examples';
import { NumberInput } from '@admiral-ds/react-ui';

export const NumberInputStatus = () => {
  return (
    <>
      <ExampleSection text="Success">
        <NumberInput
          status="success"
          prefix="От"
          suffix="₽"
          placeholder="От 0 ₽"
          defaultValue="2,00"
          onChange={(event) => {
            console.log(event.target.value);
          }}
        />
      </ExampleSection>
      <ExampleSection text="Error">
        <NumberInput
          status="error"
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
