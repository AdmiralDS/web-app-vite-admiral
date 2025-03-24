import { createFileRoute } from '@tanstack/react-router';
import { RadioButtonState } from '#examples/radiobutton/states';

export const Route = createFileRoute('/components/radiobutton/states')({
  component: () => <RadioButtonState />,
  staticData: {
    title: 'RadioButton. Состояния',
    description: '',
  },
});
