import { createFileRoute } from '@tanstack/react-router';
import { PhoneNumberInputBasic } from '#examples/phoneNumberInput';

export const Route = createFileRoute('/components/phoneNumberInput/')({
  component: () => <PhoneNumberInputBasic />,
  staticData: {
    title: 'PhoneNumberInput. Базовый пример',
    description: 'Компонент для ввода номера телефона с выбором кода-страны.',
  },
});
