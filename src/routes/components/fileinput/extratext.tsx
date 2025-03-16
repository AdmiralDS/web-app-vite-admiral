import { createFileRoute } from '@tanstack/react-router';
import { FileInputExtraText } from '#examples/fileinput/extratext';

export const Route = createFileRoute('/components/fileinput/extratext')({
  component: () => <FileInputExtraText />,
  staticData: {
    title: 'File input. Дополнительный текст',
  },
});
