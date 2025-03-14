import { createFileRoute } from '@tanstack/react-router';
import { CurrencyInputMinMax } from '#examples/currencyInput/minMaxvalue';

export const Route = createFileRoute('/components/currencyInput/minMaxvalue')({
  component: () => <CurrencyInputMinMax />,
  staticData: {
    title: 'CurrencyInput. Пример с minValue, maxValue',
  },
});
