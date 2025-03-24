import { createFileRoute } from '@tanstack/react-router';
import { PhoneNumberInputState } from '#examples/phoneNumberInput/state';

export const Route = createFileRoute('/components/phoneNumberInput/state')({
  component: () => <PhoneNumberInputState />,
  staticData: {
    title: 'PhoneNumberInput. Состояния',
  },
});
