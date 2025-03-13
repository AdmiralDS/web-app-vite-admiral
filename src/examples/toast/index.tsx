import { createFileRoute } from '@tanstack/react-router';
import { ExampleSection } from '#routes/-helpers/examples';
import { Toast, ToastProvider } from '@admiral-ds/react-ui';
import { ToastNotificationEmitter } from '#routes/-helpers/toast';

export const Template = () => {
  return (
    <ExampleSection
      text={
        <>
          В качестве уведомлений рекомендуется использовать NotificationItem.
          <br />
          <br />
          В зависимости от статуса сообщения используются четыре вида цветовых схем данного компонента.
          <br />
          <br />
          Компонент имеет фиксированную ширину. Высота настраивается автоматически при редактировании компонента.
          Рекомендуемое макимальное количество строк в компоненте — пять.
          <br />
          <br />
          При нажатии на уведомление (опционально) или ссылку внутри него - происходит переход на соответствующую
          вкладку, если же уведомление было закрыто или проигнорировано, то оно не считается прочитанным и хранятся в
          центре уведомлений под бейджем с учетом их количества.
          <br />
          <br />
          На мобильном устройстве оповещения появляются сверху, на расстоянии 16px от статус бара. Занимают всю ширину
          экрана и используется без иконки статуса.
          <br />
          <br />
          Компонент Toast необходимо оборачивать в ToastProvider для управления состоянием всплывающих нотификаций.
          Через значение autoDeleteTime в ToastProvider можно задать в ms время, по истечению которого нотификация
          скроется. Если данный параметр не задан, то следует дать возможность закрывать уведомление по нажатию иконки
          закрытия (при использовании NotificationItem выставить isClosable и передать в onClose removeToastItem).
        </>
      }
    >
      <ToastProvider autoDeleteTime={5000}>
        <ToastNotificationEmitter />
        <Toast />
      </ToastProvider>
    </ExampleSection>
  );
};

export const Route = createFileRoute('/components/toast/')({
  component: () => <Template />,
  staticData: {
    title: 'Toast. Базовый пример',
    description: 'Компонент служит для демонстрации всплывающих сообщений.',
  },
});
