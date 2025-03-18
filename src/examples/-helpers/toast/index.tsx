import {
  Button,
  DefaultToastItem,
  ID,
  IdentifyToast,
  ToastItemProps,
  ToastItemWithAutoDelete,
  useToast,
} from '@admiral-ds/react-ui';
import { useState } from 'react';
import { uid } from '../examples';

const random = (min: number, max: number) => min + Number(Math.round(Math.random() * (max - min)));

export const toastItems: IdentifyToast[] = [
  {
    status: 'error',
    children: `Запрос завершился ошибкой`,
    title: 'Заголовок',
    isClosable: true,
    linkText: 'Link',
    displayStatusIcon: true,
  },
  {
    status: 'warning',
    children: 'Слишком много попыток',
    title: 'Заголовок',
    isClosable: true,
    linkText: 'Link',
    displayStatusIcon: true,
  },
  {
    status: 'info',
    children: 'Осталось 7 попыток',
    title: 'Заголовок',
    isClosable: true,
    linkText: 'Link',
    displayStatusIcon: true,
  },
  {
    status: 'success',
    children: 'Запрос выполнен успешно',
    title: 'Заголовок',
    isClosable: true,
    linkText: 'Link',
    displayStatusIcon: true,
  },
];

export const ToastNotificationEmitter = () => {
  const [toastStack, setToastStack] = useState<Array<ToastItemProps>>([]);

  const { addToastItem, removeToastItem, autoDeleteTime } = useToast();

  const onClickHandlerAdd = () => {
    const customItem = random(0, 3);
    const toast = toastItems[customItem];
    const id = uid();
    const renderToast = (id: ID) => {
      const handleOnClose = () => {
        removeToastItem({ id, renderToast });
        // eslint-disable-next-line no-console
        console.log('Toast is closed');
        setToastStack((prevToastIdStack) => prevToastIdStack.filter((toast) => toast.renderToast !== renderToast));
      };

      return (
        <>
          {autoDeleteTime ? (
            <ToastItemWithAutoDelete onRemoveNotification={handleOnClose} autoDeleteTime={autoDeleteTime}>
              <DefaultToastItem {...toast} onClose={toast.onClose || handleOnClose} />
            </ToastItemWithAutoDelete>
          ) : (
            <DefaultToastItem {...toast} onClose={toast.onClose || handleOnClose} />
          )}
        </>
      );
    };
    addToastItem({ id, renderToast });
    setToastStack((prev) => [...prev, { id, renderToast }]);
  };
  const onClickHandlerRemove = () => {
    const newToastIdStack = [...toastStack];
    const toastToRemove = newToastIdStack.shift();
    setToastStack(newToastIdStack);
    if (toastToRemove) {
      removeToastItem(toastToRemove);
    }
  };

  return (
    <div style={{ display: 'flex', alignItems: 'flex-start', boxSizing: 'border-box', padding: '10px' }}>
      <Button onClick={onClickHandlerAdd}>Добавить сообщение</Button>
      <div style={{ width: 20 }} />
      <Button disabled={toastStack.length === 0} onClick={onClickHandlerRemove}>
        Удалить первое сообщение
      </Button>
    </div>
  );
};
