import { createFileRoute } from '@tanstack/react-router';
import { SelectPanelWithAddButton } from '#examples/select/panelWithAddButton';

export const Route = createFileRoute('/components/select/panelWithAddButton')({
  component: () => <SelectPanelWithAddButton />,
  staticData: {
    title: 'Нижняя панель с кнопкой "Добавить"',
  },
});
