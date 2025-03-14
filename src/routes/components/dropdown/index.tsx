import { createFileRoute } from '@tanstack/react-router';
import { DropdownDescription } from '#examples/dropdown';

export const Route = createFileRoute('/components/dropdown/')({
  component: () => <DropdownDescription />,
  staticData: {
    title: 'DropdownMenu',
    description:
      'Для оформления выпадающего меню можно использовать компонент DropMenu. Если необходима кастомизация, то есть возможность использовать только Menu или DropdownContainer',
  },
});
