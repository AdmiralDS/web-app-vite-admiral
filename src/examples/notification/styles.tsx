import { createFileRoute } from '@tanstack/react-router';
import { ExampleSection } from '#routes/-helpers/examples';
import {
  NotificationItem,
  NotificationItemButtonPanel,
  NotificationItemContent,
  NotificationItemTitle,
  TextButton,
} from '@admiral-ds/react-ui';

const title = 'Заголовок оповещения';
const body = 'Тут находится текст короткого оповещения';
const linkText = 'Text Button';

export const Template = () => {
  return (
    <>
      <ExampleSection text="Информационное сообщение">
        <NotificationItem status="info" displayStatusIcon isClosable style={{ width: '488px' }}>
          <NotificationItemTitle>{title}</NotificationItemTitle>
          <NotificationItemContent>{body}</NotificationItemContent>
          <NotificationItemButtonPanel>
            <TextButton dimension="s" text={linkText} />
          </NotificationItemButtonPanel>
        </NotificationItem>
      </ExampleSection>
      <ExampleSection text="Положительные действия, подтверждение, выполнение, завершение">
        <NotificationItem status="success" displayStatusIcon isClosable style={{ width: '488px' }}>
          <NotificationItemTitle>{title}</NotificationItemTitle>
          <NotificationItemContent>{body}</NotificationItemContent>
          <NotificationItemButtonPanel>
            <TextButton dimension="s" text={linkText} />
          </NotificationItemButtonPanel>
        </NotificationItem>
      </ExampleSection>
      <ExampleSection text="Опасность, критические действия, ошибка">
        <NotificationItem status="error" displayStatusIcon isClosable style={{ width: '488px' }}>
          <NotificationItemTitle>{title}</NotificationItemTitle>
          <NotificationItemContent>{body}</NotificationItemContent>
          <NotificationItemButtonPanel>
            <TextButton dimension="s" text={linkText} />
          </NotificationItemButtonPanel>
        </NotificationItem>
      </ExampleSection>
      <ExampleSection text="Предупреждение, повышенное внимание">
        <NotificationItem status="warning" displayStatusIcon isClosable style={{ width: '488px' }}>
          <NotificationItemTitle>{title}</NotificationItemTitle>
          <NotificationItemContent>{body}</NotificationItemContent>
          <NotificationItemButtonPanel>
            <TextButton dimension="s" text={linkText} />
          </NotificationItemButtonPanel>
        </NotificationItem>
      </ExampleSection>
    </>
  );
};

export const Route = createFileRoute('/components/notification/styles')({
  component: () => <Template />,
  staticData: {
    title: 'Notification. Стили',
    description: 'В зависимости от статуса сообщения используются четыре вида цветовых схем данного компонента',
  },
});
