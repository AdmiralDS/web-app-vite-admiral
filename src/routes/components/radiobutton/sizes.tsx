import { createFileRoute } from '@tanstack/react-router';
import { RadioButtonSize } from '#examples/radiobutton/sizes';

export const Route = createFileRoute('/components/radiobutton/sizes')({
  component: () => <RadioButtonSize />,
  staticData: {
    title: 'RadioButton. Размеры',
    description: '',
  },
});
