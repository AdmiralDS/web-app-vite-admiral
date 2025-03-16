import { createFileRoute } from '@tanstack/react-router';
import { CheckboxAndBottomPanel } from '#examples/menuButton/checkboxAndBottomPanel';

export const Route = createFileRoute('/components/menuButton/checkboxAndBottomPanel')({
  component: () => <CheckboxAndBottomPanel />,
  staticData: {
    title: 'MenuButton. С чекбоксами и нижней панелью в выпадающем меню',
    description: '',
  },
});
