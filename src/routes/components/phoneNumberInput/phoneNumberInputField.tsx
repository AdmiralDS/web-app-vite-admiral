import { createFileRoute } from '@tanstack/react-router';
import { Field } from '#examples/phoneNumberInput/phoneNumberInputField';

export const Route = createFileRoute('/components/phoneNumberInput/phoneNumberInputField')({
  component: () => <Field />,
  staticData: {
    title: 'PhoneNumberInputField. Базовый пример',
  },
});
