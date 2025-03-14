import { createFileRoute } from '@tanstack/react-router';
import { DateTimeFieldDisplayLine } from '#examples/dateTimeField/displayInline';

export const Route = createFileRoute('/components/dateTimeField/displayInline')({
  component: () => <DateTimeFieldDisplayLine />,
  staticData: {
    title: 'DateTime Field. Подпись в одну линию с полем ввода',
    description: 'Лэйбл отображается на одном уровне с полем ввода',
  },
});
