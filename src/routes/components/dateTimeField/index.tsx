import { createFileRoute } from '@tanstack/react-router';
import { DateTimeFieldBasic } from '#examples/dateTimeField';

export const Route = createFileRoute('/components/dateTimeField/')({
  component: () => <DateTimeFieldBasic />,
  staticData: {
    title: 'DateTime Field. Базовый пример',
    description:
      'Совмещенное поле ввода для выбора даты и времени, состоит из нескольких компонентов, ипортируемых отдельно',
  },
});
