import { createFileRoute } from '@tanstack/react-router';

import { RadioButton } from '@admiral-ds/react-ui';
import { ContentArea } from '../../-helpers/examples';

export const RadioButtonSize = () => {
  return (
    <ContentArea>
      <RadioButton value={1}>Dimension - m</RadioButton>
      <RadioButton value={1} dimension="s">
        Dimension - s
      </RadioButton>
    </ContentArea>
  );
};

export const Route = createFileRoute('/components/radiobutton/sizes')({
  component: () => <RadioButtonSize />,
  staticData: {
    title: 'RadioButton. Размеры',
    description: '',
  },
});
