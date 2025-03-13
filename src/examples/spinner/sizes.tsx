import { createFileRoute } from '@tanstack/react-router';
import { ExampleSection } from '#routes/-helpers/examples';
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
    description: 'Существует в пяти размерах - 16px (s), 20px (ms), 24px (m), 48px (l) и 64px (xl)',
  },
});
