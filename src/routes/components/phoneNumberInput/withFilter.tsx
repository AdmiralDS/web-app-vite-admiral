import { createFileRoute } from '@tanstack/react-router';
import { PhoneNumberInputWithFilter } from '#examples/phoneNumberInput/withFilter';

export const Route = createFileRoute('/components/phoneNumberInput/withFilter')({
  component: () => <PhoneNumberInputWithFilter />,
  staticData: {
    title: 'PhoneNumberInput. Пример с фильтрацией списка',
  },
});
