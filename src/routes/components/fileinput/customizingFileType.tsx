import { createFileRoute } from '@tanstack/react-router';
import { FileInputFileType } from '#examples/fileinput/customizingFileType';

export const Route = createFileRoute('/components/fileinput/customizingFileType')({
  component: () => <FileInputFileType />,
  staticData: {
    title: 'File input. Кастомизация типов файлов',
  },
});
