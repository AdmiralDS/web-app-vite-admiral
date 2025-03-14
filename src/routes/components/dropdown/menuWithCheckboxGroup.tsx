import { createFileRoute } from '@tanstack/react-router';
import { MenuWithCheckboxGroup } from '#examples/dropdown/menuWithCheckboxGroup';

export const Route = createFileRoute('/components/dropdown/menuWithCheckboxGroup')({
  component: () => <MenuWithCheckboxGroup />,
  staticData: {
    title: 'Menu. С CheckboxGroup',
    description: '',
  },
});
