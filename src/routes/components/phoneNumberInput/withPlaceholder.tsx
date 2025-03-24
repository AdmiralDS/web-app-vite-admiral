import { createFileRoute } from '@tanstack/react-router';
import { PhoneNumberInputWithPlaceholder } from '#examples/phoneNumberInput/withPlaceholder';

export const Route = createFileRoute('/components/phoneNumberInput/withPlaceholder')({
  component: () => <PhoneNumberInputWithPlaceholder />,
  staticData: {
    title: 'PhoneNumberInput. Пример с placeholder',
  },
});
