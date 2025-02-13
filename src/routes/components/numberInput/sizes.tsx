import { createFileRoute } from '@tanstack/react-router';
import { ExampleSection } from '../../-helpers/examples';
import { NumberInput } from '@admiral-ds/react-ui';

export const Template = () => {
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

export const Route = createFileRoute('/components/numberInput/sizes')({
  component: () => <Template />,
  staticData: {
    title: 'NumberInput. Размеры',
    description: 'Компонент существует в 3 размерах s, m, xl. По умолчанию m',
  },
});
