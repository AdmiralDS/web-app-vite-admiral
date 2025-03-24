import { createFileRoute } from '@tanstack/react-router';
import { CurrencyInputBasic } from '#examples/currencyInput';

export const Route = createFileRoute('/components/currencyInput/')({
  component: () => <CurrencyInputBasic />,
  staticData: {
    title: 'CurrencyInput. Базовый пример',
  },
});
