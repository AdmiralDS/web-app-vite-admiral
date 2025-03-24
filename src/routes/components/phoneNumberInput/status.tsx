import { createFileRoute } from '@tanstack/react-router';
import { PhoneNumberInputStatus } from '#examples/phoneNumberInput/status';

export const Route = createFileRoute('/components/phoneNumberInput/status')({
  component: () => <PhoneNumberInputStatus />,
  staticData: {
    title: 'PhoneNumberInput. Статусы',
  },
});
