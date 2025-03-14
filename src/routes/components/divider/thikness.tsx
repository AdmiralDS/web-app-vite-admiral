import { createFileRoute } from '@tanstack/react-router';
import { DividerThikness } from '#examples/divider/thikness';

export const Route = createFileRoute('/components/divider/thikness')({
  component: () => <DividerThikness />,
  staticData: {
    title: 'Divider. Толщина линии (dimension)',
    description: 'Размер компонента, определяет толщину разделителя "s","m"',
  },
});
