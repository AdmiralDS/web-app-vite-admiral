import { createFileRoute } from '@tanstack/react-router';
import { ExampleSection } from '#routes/-helpers/examples';
import { NumberInput } from '@admiral-ds/react-ui';

export const Template = () => {
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

export const Route = createFileRoute('/components/numberInput/status')({
  component: () => <Template />,
  staticData: {
    title: 'NumberInput. Статусы',
  },
});
