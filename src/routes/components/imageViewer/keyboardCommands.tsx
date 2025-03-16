import { createFileRoute } from '@tanstack/react-router';
import { ImageViewerKeyboardCommands } from '#examples/imageViewer/keyboardCommands';

export const Route = createFileRoute('/components/imageViewer/keyboardCommands')({
  component: () => <ImageViewerKeyboardCommands />,
  staticData: {
    title: 'ImageViewer. Клавиатурные команды',
    description: '',
  },
});
