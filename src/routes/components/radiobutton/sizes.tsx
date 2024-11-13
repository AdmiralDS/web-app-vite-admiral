import { createFileRoute } from '@tanstack/react-router';

import { RadioButton } from '@admiral-ds/react-ui';
import { ExampleWrapper } from '../../-helpers/examples';

export const RadioButtonSize = () => {
  return (
    <ExampleWrapper>
      <RadioButton value={1}>Dimension - m</RadioButton>
      <RadioButton value={1} dimension="s">
        Dimension - s
      </RadioButton>
    </ExampleWrapper>
  );
};

export const Route = createFileRoute('/components/radiobutton/sizes')({
  component: () => <RadioButtonSize />,
  staticData: {
    title: 'RadioButton. Размеры',
    description: '',
  },
});
