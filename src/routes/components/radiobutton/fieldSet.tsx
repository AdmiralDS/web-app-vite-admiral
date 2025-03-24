import { createFileRoute } from '@tanstack/react-router';
import { FieldSetRadioButton } from '#examples/radiobutton/fieldSet';

export const Route = createFileRoute('/components/radiobutton/fieldSet')({
  component: () => <FieldSetRadioButton />,
  staticData: {
    title: 'RadioButton. Группа',
    description: '',
  },
});
