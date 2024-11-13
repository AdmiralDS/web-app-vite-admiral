import { createFileRoute } from '@tanstack/react-router';

import { RadioButton } from '@admiral-ds/react-ui';
import { ExampleWrapper } from '../../-helpers/examples';

export const RadioButtonExtraText = () => {
  return (
    <ExampleWrapper>
      <RadioButton value={1} extraText="Additional text">
        Text
      </RadioButton>
      <RadioButton value={1} dimension="s" extraText="Additional text">
        Text
      </RadioButton>
    </ExampleWrapper>
  );
};

export const Route = createFileRoute('/components/radiobutton/extraText')({
  component: () => <RadioButtonExtraText />,
  staticData: {
    title: 'RadioButton. Дополнительный текст',
    description: '',
  },
});
