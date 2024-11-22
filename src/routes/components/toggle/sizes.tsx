import { createFileRoute } from '@tanstack/react-router';
import { ExampleSection } from '../../-helpers/examples';
import { Toggle } from '@admiral-ds/react-ui';

const Sizes = () => {
  return (
    <>
      <ExampleSection text="Размер M">
        <Toggle>Text</Toggle>
      </ExampleSection>
      <ExampleSection text="Размер S">
        <Toggle dimension="s">Text</Toggle>
      </ExampleSection>
    </>
  );
};

export const Route = createFileRoute('/components/toggle/sizes')({
  component: () => <Sizes />,
  staticData: {
    title: 'Toggle. Размеры',
    description: '',
  },
});
