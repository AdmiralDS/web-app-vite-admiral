import { createFileRoute } from '@tanstack/react-router';
import { ExampleSection } from '../../-helpers/examples';
import { Spinner } from '@admiral-ds/react-ui';

export const Template = () => {
  return (
    <>
      <ExampleSection text="Размер S">
        <Spinner dimension="s" />
      </ExampleSection>
      <ExampleSection text="Размер MS">
        <Spinner dimension="ms" />
      </ExampleSection>
      <ExampleSection text="Размер M">
        <Spinner dimension="m" />
      </ExampleSection>
      <ExampleSection text="Размер L">
        <Spinner dimension="l" />
      </ExampleSection>
      <ExampleSection text="Размер XL">
        <Spinner dimension="xl" />
      </ExampleSection>
    </>
  );
};

export const Route = createFileRoute('/components/spinner/sizes')({
  component: () => <Template />,
  staticData: {
    title: 'Spinner. Размеры',
    description: 'Компонент существует в 5 размерах s, ms, m, l, xl',
  },
});
