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
    <ExampleSection>
      <NotificationItem status="info" displayStatusIcon isClosable style={{ width: '488px' }}>
        <NotificationItemTitle>{title}</NotificationItemTitle>
        <NotificationItemContent>{body}</NotificationItemContent>
        <NotificationItemButtonPanel>
          <TextButton dimension="s" text={linkText} />
        </NotificationItemButtonPanel>
      </NotificationItem>
    </ExampleSection>
  );
};

export const Route = createFileRoute('/components/notification/')({
  component: () => <Template />,
  staticData: {
    title: 'Notification. Базовый пример',
    description:
      'Статичные оповещения показывают важную для пользователя информацию, делая на ней акцент за счет визуального выделения. Оповещения бывают как с заголовком, так и без него. Можно включать-выключать ссылки. Компонент может быть произвольной ширины, но не рекомендуется превышать 488 px. На мобильных устройствах компонент занимает всю ширину экрана и используется без иконки статуса.',
  },
});
