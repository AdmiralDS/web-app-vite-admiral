import { createFileRoute } from '@tanstack/react-router';
import { PhoneNumberInputSelectedCountry } from '#examples/phoneNumberInput/selectedCountry';

export const Route = createFileRoute('/components/phoneNumberInput/selectedCountry')({
  component: () => <PhoneNumberInputSelectedCountry />,
  staticData: {
    title: 'PhoneNumberInput. Пример с заданной страной по умолчанию',
  },
});
