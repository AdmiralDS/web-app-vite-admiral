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

export const NotificationBasic = () => {
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
