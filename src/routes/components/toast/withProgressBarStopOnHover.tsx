import { createFileRoute } from '@tanstack/react-router';
import { useEffect, useState } from 'react';
import { ExampleSection, uid } from '../../-helpers/examples';
import {
  Button,
  ID,
  mediumGroupBorderRadius,
  NotificationItemButtonPanel,
  NotificationItemContent,
  NotificationItemStatus,
  NotificationItemTitle,
  NotificationStatus,
  StyledNotificationItem,
  TextButton,
  TextInput,
  Toast,
  ToastItemProps,
  ToastProvider,
  useToast,
} from '@admiral-ds/react-ui';
import styled from 'styled-components';

const Progress = styled.div.attrs<{ $percent: number }>((props) => ({
  style: { width: `${props.$percent}%` },
}))<{ $percent: number; $status?: NotificationStatus; $duration: number }>`
  position: absolute;
  bottom: 0;
  left: 0;
  background: ${({ theme, $status }) => {
    switch ($status) {
      case 'warning':
        return `var(--admiral-color-Warning_Warning50Main, ${theme.color['Warning/Warning 50 Main']})`;
      case 'error':
        return `var(--admiral-color-Error_Error60Main, ${theme.color['Error/Error 60 Main']})`;
      case 'success':
        return `var(--admiral-color-Success_Success50Main, ${theme.color['Success/Success 50 Main']})`;
      case 'info':
      default:
        return `var(--admiral-color-Primary_Primary60Main, ${theme.color['Primary/Primary 60 Main']})`;
    }
  }};
  height: 4px;
  transition: ${({ $duration }) => `all ${$duration}ms linear`};
`;

const Container = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: var(--admiral-border-radius-Medium, ${(p) => mediumGroupBorderRadius(p.theme.shape)});
`;

/** Шаблон для отображения кастомного уведомления со шкалой отсчета времени,
 * через которое оно закроется */
export interface ToastItemWithProgressProps {
  /** Колбек для удаления уведомления */
  onRemoveNotification: () => void;
  /** Время, после которого уведомление автоматически удалится */
  autoDeleteTime?: number;
  /** Статус уведомления */
  status?: NotificationItemStatus;
  /** Шаг шкалы отсчета времени */
  progressStep?: number;
}

export const ToastItemWithProgress = ({
  children,
  status,
  onRemoveNotification,
  autoDeleteTime,
  progressStep = 1,
}: React.PropsWithChildren<ToastItemWithProgressProps>) => {
  const [progress, setProgress] = useState(100);

  const delta = (autoDeleteTime || 0) / (100 * progressStep);
  const [continueProgress, setContinueProgress] = useState(true);
  useEffect(() => {
    if (!autoDeleteTime || !continueProgress) return;

    if (progress === 0) {
      onRemoveNotification();
      return;
    }
    const timerId = setTimeout(() => setProgress((prev) => prev - 1), delta);

    return () => {
      clearTimeout(timerId);
    };
  }, [progress, continueProgress, progressStep]);

  const handleMouseEnter = () => setContinueProgress(false);
  const handleMouseLeave = () => setContinueProgress(true);

  return (
    <Container onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {children}
      {progress > 0 && <Progress $percent={progress} $status={status} $duration={delta} />}
    </Container>
  );
};

const Wrapper = styled.div`
  display: flex;
  gap: 10px;
  > * {
    flex: 1 1 auto;
  }
`;

const Separator = styled.div`
  height: 20px;
`;

const toastStatuses: NotificationItemStatus[] = ['info', 'error', 'success', 'warning'];

const handleTextButtonClick = () => {
  // eslint-disable-next-line no-console
  console.log('TextButton click');
};

const MessageForm = () => {
  const [toastIdStack, setToastIdStack] = useState<Array<ToastItemProps>>([]);
  const [titleValue, setTitleValue] = useState('Toast title');
  const [contentValue, setContentValue] = useState('Toast content');
  const [textButton1Value, setTextButton1Value] = useState('TextButton1');
  const [textButton2Value, setTextButton2Value] = useState('TextButton2');
  const [toastStatus, setToastStatus] = useState(0);

  const { addToastItem, removeToastItem, autoDeleteTime } = useToast();

  const onClickHandlerAdd = () => {
    const id = uid();
    const renderFunction = (id: ID) => {
      const handleCloseToast = () => {
        removeToastItem({ id, renderToast: renderFunction });
        // eslint-disable-next-line no-console
        console.log('Toast is closed');
        setToastIdStack((prevToastIdStack) => prevToastIdStack.filter((toast) => toast.renderToast !== renderFunction));
      };

      return (
        <ToastItemWithProgress
          status={toastStatuses[toastStatus]}
          autoDeleteTime={autoDeleteTime}
          onRemoveNotification={handleCloseToast}
        >
          <StyledNotificationItem
            status={toastStatuses[toastStatus]}
            isClosable={true}
            displayStatusIcon={true}
            onClose={handleCloseToast}
          >
            <NotificationItemTitle>{titleValue}</NotificationItemTitle>
            <NotificationItemContent>{contentValue}</NotificationItemContent>
            <NotificationItemButtonPanel>
              <TextButton dimension="s" text={textButton1Value} onClick={handleTextButtonClick} />
              <TextButton dimension="s" text={textButton2Value} onClick={handleTextButtonClick} />
            </NotificationItemButtonPanel>
          </StyledNotificationItem>
        </ToastItemWithProgress>
      );
    };
    addToastItem({ id, renderToast: renderFunction });
    setToastIdStack((prev) => [...prev, { id, renderToast: renderFunction }]);
    setToastStatus((prevStatus) => (prevStatus + 1) % 4);
  };
  const onClickHandlerRemove = () => {
    const newToastIdStack = [...toastIdStack];
    const removeToast = newToastIdStack.shift();
    setToastIdStack(newToastIdStack);
    if (removeToast) {
      removeToastItem(removeToast);
    }
  };

  return (
    <div style={{ width: '550px' }}>
      <TextInput value={titleValue} onChange={(e) => setTitleValue(e.target.value)} />
      <Separator />
      <TextInput value={contentValue} onChange={(e) => setContentValue(e.target.value)} />
      <Separator />
      <Wrapper>
        <TextInput value={textButton1Value} onChange={(e) => setTextButton1Value(e.target.value)} />
        <TextInput value={textButton2Value} onChange={(e) => setTextButton2Value(e.target.value)} />
      </Wrapper>
      <Separator />
      <Wrapper>
        <Button onClick={onClickHandlerAdd}>Добавить сообщение</Button>
        <Button disabled={toastIdStack.length === 0} onClick={onClickHandlerRemove}>
          Удалить первое сообщение
        </Button>
      </Wrapper>
    </div>
  );
};

export const Template = () => {
  return (
    <ExampleSection>
      <ToastProvider autoDeleteTime={5000}>
        <MessageForm />
        <Toast />
      </ToastProvider>
    </ExampleSection>
  );
};

export const Route = createFileRoute('/components/toast/withProgressBarStopOnHover')({
  component: () => <Template />,
  staticData: {
    title: 'Toast. С задержкой при наведении',
    description:
      'Шкала, графически показывающая время, через которое закроется уведомление. Не изменяет размер компонента, находится в нижней части. Время отсчета соответствует времени показа уведомления.',
  },
});
