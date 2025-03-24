import { createFileRoute } from '@tanstack/react-router';
import { DateTimeFieldDimension } from '#examples/dateTimeField/dimension';

export const Route = createFileRoute('/components/dateTimeField/dimension')({
  component: () => <DateTimeFieldDimension />,
  staticData: {
    title: 'DateTime Field. Размеры',
    description: 'Компонент представлен в трёх размерах - xl, m и s',
  },
});
