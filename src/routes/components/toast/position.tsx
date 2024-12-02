import { createFileRoute } from '@tanstack/react-router';
import { ExampleSection } from '../../-helpers/examples';
import { Toast, ToastProvider } from '@admiral-ds/react-ui';
import { ToastNotificationEmitter } from '../../-helpers/toast';

export const Template = () => {
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

export const Route = createFileRoute('/components/toast/position')({
  component: () => <Template />,
  staticData: {
    title: 'Toast. Расположение уведомлений',
    description: (
      <>
        Быстрые уведомления всплывают сверху справа рабочей области сайта, в случае, когда оповещение пришло извне, либо
        справа снизу, если сообщение показывает реакцию на действие пользователя, и остаются там несколько секунд
        (настраиваемый параметр).
        <br />
        <br />
        При поступлении нового оповещения, предыдущее опускается вниз (сценарий сверху) и поднимается вверх (сценарий
        снизу). Расстояние между оповещениями 16px.
        <br />
        <br />
        На мобильном устройстве оповещения появляются сверху, на расстоянии 16px от статус бара. Занимают всю ширину
        экрана и используется без иконки статуса.
      </>
    ),
  },
});
