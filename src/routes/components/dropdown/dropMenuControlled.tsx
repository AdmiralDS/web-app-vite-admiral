import { createFileRoute } from '@tanstack/react-router';
import { DropMenuControlled } from '#examples/dropdown/dropMenuControlled';

export const Route = createFileRoute('/components/dropdown/dropMenuControlled')({
  component: () => <DropMenuControlled />,
  staticData: {
    title: 'DropMenu. Контроллируемое состояние видимости',
    description: '',
  },
});
