import { ExampleSection } from '#routes/-helpers/examples';
import { Toast, ToastProvider } from '@admiral-ds/react-ui';
import { ToastNotificationEmitter } from '#routes/-helpers/toast';

export const ToastPosition = () => {
  return (
    <>
      <ExampleSection text="Расположение сверху справа">
        <ToastProvider autoDeleteTime={5000}>
          <ToastNotificationEmitter />
          <Toast position="top-right" />
        </ToastProvider>
      </ExampleSection>
      <ExampleSection text="Расположение снизу справа">
        <ToastProvider autoDeleteTime={5000}>
          <ToastNotificationEmitter />
          <Toast position="bottom-right" />
        </ToastProvider>
      </ExampleSection>
      <ExampleSection text="Настройка места всплытия через стили">
        <ToastProvider autoDeleteTime={5000}>
          <ToastNotificationEmitter />
          <Toast style={{ top: 128, left: 64 }} />
        </ToastProvider>
      </ExampleSection>
    </>
  );
};
