import { createFileRoute } from '@tanstack/react-router';
import { CheckboxAndTopPanel } from '#examples/menuButton/checkboxAndTopPanel';

export const Route = createFileRoute('/components/menuButton/checkboxAndTopPanel')({
  component: () => <CheckboxAndTopPanel />,
  staticData: {
    title: 'MenuButton. С чекбоксами и верхней панелью в выпадающем меню',
    description: '',
  },
});
