import { createFileRoute } from '@tanstack/react-router';
import { FileInputFileStatuses } from '#examples/fileinput/filestatus';

export const Route = createFileRoute('/components/fileinput/filestatus')({
  component: () => <FileInputFileStatuses />,
  staticData: {
    title: 'File input. Статусы загрузки файлов',
  },
});
