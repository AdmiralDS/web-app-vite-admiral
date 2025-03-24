import { createFileRoute } from '@tanstack/react-router';
import { MenuWithRadioButton } from '#examples/dropdown/menuWithRadioButton';

export const Route = createFileRoute('/components/dropdown/menuWithRadioButton')({
  component: () => <MenuWithRadioButton />,
  staticData: {
    title: 'Menu. С RadioButton',
    description: '',
  },
});
