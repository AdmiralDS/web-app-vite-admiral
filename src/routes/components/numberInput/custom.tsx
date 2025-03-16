import { createFileRoute } from '@tanstack/react-router';
import { NumberInputCustom } from '#examples/numberInput/custom';

export const Route = createFileRoute('/components/numberInput/custom')({
  component: () => <NumberInputCustom />,
  staticData: {
    title: 'NumberInput. Пример изменения настроек (suffix, precision, thousand)',
  },
});
