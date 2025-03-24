import { createFileRoute } from '@tanstack/react-router';
import { MenuWithCheckbox } from '#examples/dropdown/menuWithCheckbox';

export const Route = createFileRoute('/components/dropdown/menuWithCheckbox')({
  component: () => <MenuWithCheckbox />,
  staticData: {
    title: 'Menu. С Checkbox',
    description: '',
  },
});
