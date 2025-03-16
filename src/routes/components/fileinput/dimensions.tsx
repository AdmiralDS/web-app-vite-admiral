import { createFileRoute } from '@tanstack/react-router';
import { FileInputDimensions } from '#examples/fileinput/dimensions';

export const Route = createFileRoute('/components/fileinput/dimensions')({
  component: () => <FileInputDimensions />,
  staticData: {
    title: 'File input. Размеры',
  },
});
