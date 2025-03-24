import { createFileRoute } from '@tanstack/react-router';
import { Field } from '#examples/select/selectField';

export const Route = createFileRoute('/components/select/selectField')({
  component: () => <Field />,
  staticData: {
    title: 'SelectField. Базовый пример',
  },
});
