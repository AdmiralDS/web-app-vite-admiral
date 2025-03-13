import { createFileRoute } from '@tanstack/react-router';
import { ExampleSection } from '#routes/-helpers/examples';
import { NumberInput } from '@admiral-ds/react-ui';

export const Template = () => {
  return (
    <>
      <ExampleSection text="disabled">
        <NumberInput
          disabled
          prefix="От"
          suffix="₽"
          placeholder="От 0 ₽"
          defaultValue="2,00"
          onChange={(event) => {
            console.log(event.target.value);
          }}
        />
      </ExampleSection>
      <ExampleSection text="displayClearIcon - отображение иконки отчистки поля">
        <NumberInput
          displayClearIcon
          prefix="От"
          suffix="₽"
          placeholder="От 0 ₽"
          defaultValue="2,00"
          onChange={(event) => {
            console.log(event.target.value);
          }}
        />
      </ExampleSection>
      <ExampleSection text="readOnly">
        <NumberInput
          readOnly
          prefix="От"
          suffix="₽"
          placeholder="От 0 ₽"
          defaultValue="2,00"
          onChange={(event) => {
            console.log(event.target.value);
          }}
        />
      </ExampleSection>
      <ExampleSection text="disableCopying">
        <NumberInput
          disableCopying
          prefix="От"
          suffix="₽"
          placeholder="От 0 ₽"
          defaultValue="2,00"
          onChange={(event) => {
            console.log(event.target.value);
          }}
        />
      </ExampleSection>
      <ExampleSection text="skeleton">
        <NumberInput
          skeleton
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

export const Route = createFileRoute('/components/numberInput/state')({
  component: () => <Template />,
  staticData: {
    title: 'NumberInput. Состояния',
  },
});
