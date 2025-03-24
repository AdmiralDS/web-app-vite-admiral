import { createFileRoute } from '@tanstack/react-router';
import { FileInputCustomizing } from '#examples/fileinput/customizing';

export const Route = createFileRoute('/components/fileinput/customizing')({
  component: () => <FileInputCustomizing />,
  staticData: {
    title: 'File input. Базовый пример',
  },
});
