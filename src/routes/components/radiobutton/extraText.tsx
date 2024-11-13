import { createFileRoute } from '@tanstack/react-router';

import { RadioButton } from '@admiral-ds/react-ui';
import { ContentArea } from '../../-helpers/examples';

export const RadioButtonExtraText = () => {
  return (
    <ContentArea>
      <RadioButton value={1} extraText="Additional text">
        Text
      </RadioButton>
      <RadioButton value={1} dimension="s" extraText="Additional text">
        Text
      </RadioButton>
    </ContentArea>
  );
};

export const Route = createFileRoute('/components/radiobutton/extraText')({
  component: () => <RadioButtonExtraText />,
  staticData: {
    title: 'RadioButton. Дополнительный текст',
    description: '',
  },
});
