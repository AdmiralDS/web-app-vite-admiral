import { createFileRoute } from '@tanstack/react-router';
import { CurrencyInputWithPrefix } from '#examples/currencyInput/withPrefix';

export const Route = createFileRoute('/components/currencyInput/withPrefix')({
  component: () => <CurrencyInputWithPrefix />,
  staticData: {
    title: 'CurrencyInput. С преффиксом',
  },
});
