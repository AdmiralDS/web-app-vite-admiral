import { createFileRoute } from '@tanstack/react-router';
import { ToggleLabelPosition } from '#examples/toggle/labelPosition';

export const Route = createFileRoute('/components/toggle/labelPosition')({
  component: () => <ToggleLabelPosition />,
  staticData: {
    title: 'Toggle. Расположение подписи',
    description: 'Варианты компонента без подписи, с подписью слева и справа.',
  },
});
