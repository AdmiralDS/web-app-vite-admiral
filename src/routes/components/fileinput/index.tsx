import { createFileRoute } from '@tanstack/react-router';
import { FileInputBasic } from '#examples/fileinput';

export const Route = createFileRoute('/components/fileinput/')({
  component: () => <FileInputBasic />,
  staticData: {
    title: 'File input. Базовый пример',
  },
});
