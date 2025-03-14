import { createFileRoute } from '@tanstack/react-router';
import { DateTimeFieldExtraText } from '#examples/dateTimeField/extraText';

export const Route = createFileRoute('/components/dateTimeField/extraText')({
  component: () => <DateTimeFieldExtraText />,
  staticData: {
    title: 'DateTime Field. Дополнительный текст',
    description: 'Дополнительный текст, который отображается под полем ввода',
  },
});
