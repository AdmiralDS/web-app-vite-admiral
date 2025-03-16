import { createFileRoute } from '@tanstack/react-router';
import { Field } from '#examples/inputEx/inputExField';

export const Route = createFileRoute('/components/inputEx/inputExField')({
  component: () => <Field />,
  staticData: {
    title: 'InputExField. Базовый пример',
  },
});
