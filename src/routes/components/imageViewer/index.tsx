import { createFileRoute } from '@tanstack/react-router';
import { ImageViewerBasic } from '#examples/imageViewer';

export const Route = createFileRoute('/components/imageViewer/')({
  component: () => <ImageViewerBasic />,
  staticData: {
    title: 'ImageViewer. Базовый пример',
    description: 'Компонент для просмотра изображений',
  },
});
