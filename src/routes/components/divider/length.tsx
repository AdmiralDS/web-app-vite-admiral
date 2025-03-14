import { createFileRoute } from '@tanstack/react-router';
import { DividerLength } from '#examples/divider/length';

export const Route = createFileRoute('/components/divider/length')({
  component: () => <DividerLength />,
  staticData: {
    title: 'Divider. Длина линии (length)',
  },
});
