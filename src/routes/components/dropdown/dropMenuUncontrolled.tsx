import { createFileRoute } from '@tanstack/react-router';
import { DropMenuUncontrolled } from '#examples/dropdown/dropMenuUncontrolled';

export const Route = createFileRoute('/components/dropdown/dropMenuUncontrolled')({
  component: () => <DropMenuUncontrolled />,
  staticData: {
    title: 'DropMenu. Неконтроллируемое состояние видимости',
    description: '',
  },
});
