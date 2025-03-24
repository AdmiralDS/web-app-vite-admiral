import { createFileRoute } from '@tanstack/react-router';
import { Field } from '#examples/numberInput/numberInputField';

export const Route = createFileRoute('/components/numberInput/numberInputField')({
  component: () => <Field />,
  staticData: {
    title: 'NumberInputField. Базовый пример',
  },
});
