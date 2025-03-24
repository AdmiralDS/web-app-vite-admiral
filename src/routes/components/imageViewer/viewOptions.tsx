import { createFileRoute } from '@tanstack/react-router';
import { ImageViewerViewOptions } from '#examples/imageViewer/viewOptions';

export const Route = createFileRoute('/components/imageViewer/viewOptions')({
  component: () => <ImageViewerViewOptions />,
  staticData: {
    title: 'ImageViewer. Алгоритм отображения',
    description: '',
  },
});
