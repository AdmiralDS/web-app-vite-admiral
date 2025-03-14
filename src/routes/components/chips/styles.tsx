import { createFileRoute } from '@tanstack/react-router';
import { ChipsStyles } from '#examples/chips/styles';

export const Route = createFileRoute('/components/chips/styles')({
  component: () => <ChipsStyles />,
  staticData: {
    title: 'Chips. Стили',
    description: 'В библиотеке есть два типа чипсов — Filled и Outlined.',
  },
});
