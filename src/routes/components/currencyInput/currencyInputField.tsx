import { createFileRoute } from '@tanstack/react-router';
import { Field } from '#examples/currencyInput/currencyInputField';

export const Route = createFileRoute('/components/currencyInput/currencyInputField')({
  component: () => <Field />,
  staticData: {
    title: 'CurrencyInputField. Базовый пример',
  },
});
