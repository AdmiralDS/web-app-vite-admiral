import { ExampleSection } from '#examples/-helpers';
import { Toast, ToastProvider } from '@admiral-ds/react-ui';
import { ToastNotificationEmitter } from '#examples/-helpers/toast';

export const ToastLineNotification = () => {
  return (
    <ExampleSection>
      <ToastProvider autoDeleteTime={5000}>
        <ToastNotificationEmitter />
        <Toast style={{ top: 16, left: 16, width: 'initial' }} />
      </ToastProvider>
    </ExampleSection>
  );
};
