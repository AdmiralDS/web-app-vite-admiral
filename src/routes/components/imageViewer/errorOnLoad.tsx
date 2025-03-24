import { createFileRoute } from '@tanstack/react-router';
import { ImageViewerErrorOnLoad } from '#examples/imageViewer/errorOnLoad';

export const Route = createFileRoute('/components/imageViewer/errorOnLoad')({
  component: () => <ImageViewerErrorOnLoad />,
  staticData: {
    title: 'ImageViewer. Ошибки при загрузке',
    description: '',
  },
});
