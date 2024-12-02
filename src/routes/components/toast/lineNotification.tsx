import { createFileRoute } from '@tanstack/react-router';
import { ExampleSection } from '../../-helpers/examples';
import { Toast, ToastProvider } from '@admiral-ds/react-ui';
import { ToastNotificationEmitter } from '../../-helpers/toast';

export const Template = () => {
  return (
    <ExampleSection>
      <ToastProvider autoDeleteTime={5000}>
        <ToastNotificationEmitter />
        <Toast style={{ top: 16, left: 16, width: 'initial' }} />
      </ToastProvider>
    </ExampleSection>
  );
};

export const Route = createFileRoute('/components/toast/lineNotification')({
  component: () => <Template />,
  staticData: {
    title: 'Toast. Line Notification',
    description:
      'Быстрые уведомления всплывают сверху по всей ширине рабочей области сайта, и остаются там несколько секунд (настраиваемый параметр). Могут содержать ссылку или быть без нее.',
  },
});
