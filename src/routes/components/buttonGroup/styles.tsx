import { createFileRoute } from '@tanstack/react-router';
import { ButtonGroupStyles } from '#examples/buttonGroup/styles';

export const Route = createFileRoute('/components/buttonGroup/styles')({
  component: () => <ButtonGroupStyles />,
  staticData: {
    title: 'ButtonGroup. Стили',
    description: 'Представлен в вариантах Primary, Secondary и Tertiary.',
  },
});
