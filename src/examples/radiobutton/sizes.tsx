import { createFileRoute } from '@tanstack/react-router';

import { RadioButton } from '@admiral-ds/react-ui';
import { ExampleSection } from '#routes/-helpers/examples';

export const RadioButtonSize = () => {
  return (
    <>
      <ExampleSection text="Размер M">
        <RadioButton value={1}>Text</RadioButton>
      </ExampleSection>
      <ExampleSection text="Размер S">
        <RadioButton value={1} dimension="s">
          Text
        </RadioButton>
      </ExampleSection>
    </>
  );
};

export const Route = createFileRoute('/components/radiobutton/sizes')({
  component: () => <RadioButtonSize />,
  staticData: {
    title: 'RadioButton. Размеры',
    description: '',
  },
});
