import { createFileRoute } from '@tanstack/react-router';
import { PhoneNumberInputSizes } from '#examples/phoneNumberInput/sizes';

export const Route = createFileRoute('/components/phoneNumberInput/sizes')({
  component: () => <PhoneNumberInputSizes />,
  staticData: {
    title: 'PhoneNumberInput. Состояния',
    description: 'Компонент существует в 3 размерах s, m, xl',
  },
});
