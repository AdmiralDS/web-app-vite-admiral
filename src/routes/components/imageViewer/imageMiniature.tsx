import { createFileRoute } from '@tanstack/react-router';
import { ImageViewerMiniature } from '#examples/imageViewer/imageMiniature';

export const Route = createFileRoute('/components/imageViewer/imageMiniature')({
  component: () => <ImageViewerMiniature />,
  staticData: {
    title: 'ImageViewer. Отображение миниатюр',
    description:
      'Может использоваться как отдельно, так и в группе, если изображений несколько. Присутствует 6 размеров.',
  },
});
