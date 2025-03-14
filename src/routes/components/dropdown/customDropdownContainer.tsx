import { createFileRoute } from '@tanstack/react-router';
import { MenuContainer } from '#examples/dropdown/customDropdownContainer';

export const Route = createFileRoute('/components/dropdown/customDropdownContainer')({
  component: () => <MenuContainer />,
  staticData: {
    title: 'Контейнер с меню',
    description: '',
  },
});
