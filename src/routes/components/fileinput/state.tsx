import { createFileRoute } from '@tanstack/react-router';
import { FileInputState } from '#examples/fileinput/state';

export const Route = createFileRoute('/components/fileinput/state')({
  component: () => <FileInputState />,
  staticData: {
    title: 'File input. Состояния/статусы',
  },
});
