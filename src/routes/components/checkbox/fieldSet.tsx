import { createFileRoute } from '@tanstack/react-router';
import { FieldSetCheckbox } from '#examples/checkbox/fieldSet';

export const Route = createFileRoute('/components/checkbox/fieldSet')({
  component: () => <FieldSetCheckbox />,
  staticData: {
    title: 'Группа чекбоксов',
    description: '',
  },
});
