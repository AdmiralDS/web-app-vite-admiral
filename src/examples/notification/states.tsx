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
      <ExampleSection text="Иконка статуса, иконка закрытия, заголовок, текст">
        <NotificationItem status="info" displayStatusIcon isClosable style={{ width: '320px' }}>
          <NotificationItemTitle>{title}</NotificationItemTitle>
          <NotificationItemContent>{body}</NotificationItemContent>
        </NotificationItem>
      </ExampleSection>
      <ExampleSection text="Иконка статуса, иконка закрытия, текст без заголовка">
        <NotificationItem status="info" displayStatusIcon isClosable style={{ width: '320px' }}>
          <NotificationItemContent>{body}</NotificationItemContent>
        </NotificationItem>
      </ExampleSection>
      <ExampleSection text="Иконка статуса, иконка закрытия, заголовок без текста">
        <NotificationItem status="info" displayStatusIcon isClosable style={{ width: '320px' }}>
          <NotificationItemTitle>{title}</NotificationItemTitle>
        </NotificationItem>
      </ExampleSection>
      <ExampleSection text="Иконка статуса, иконка закрытия, заголовок, текст, TextButton">
        <NotificationItem status="info" displayStatusIcon isClosable style={{ width: '320px' }}>
          <NotificationItemTitle>{title}</NotificationItemTitle>
          <NotificationItemContent>{body}</NotificationItemContent>
          <NotificationItemButtonPanel>
            <TextButton dimension="s" text={linkText} />
          </NotificationItemButtonPanel>
        </NotificationItem>
      </ExampleSection>
      <ExampleSection text="Иконка статуса, иконка закрытия, заголовок, текст, две TextButton">
        <NotificationItem status="info" displayStatusIcon isClosable style={{ width: '320px' }}>
          <NotificationItemTitle>{title}</NotificationItemTitle>
          <NotificationItemContent>{body}</NotificationItemContent>
          <NotificationItemButtonPanel>
            <TextButton dimension="s" text={linkText} />
            <TextButton dimension="s" text={linkText} />
          </NotificationItemButtonPanel>
        </NotificationItem>
      </ExampleSection>
      <ExampleSection text="Иконка статуса, заголовок, текст, TextButton без иконки закрытия">
        <NotificationItem status="info" displayStatusIcon style={{ width: '320px' }}>
          <NotificationItemTitle>{title}</NotificationItemTitle>
          <NotificationItemContent>{body}</NotificationItemContent>
          <NotificationItemButtonPanel>
            <TextButton dimension="s" text={linkText} />
          </NotificationItemButtonPanel>
        </NotificationItem>
      </ExampleSection>
      <ExampleSection text="Заголовок, текст, без иконок статуса и закрытия (для мобильной версии)">
        <NotificationItem status="info" style={{ width: '320px' }}>
          <NotificationItemTitle>{title}</NotificationItemTitle>
          <NotificationItemContent>{body}</NotificationItemContent>
        </NotificationItem>
      </ExampleSection>
      <ExampleSection text="Иконка закрытия, заголовок, текст, без иконки статуса (для мобильной версии)">
        <NotificationItem status="info" isClosable style={{ width: '320px' }}>
          <NotificationItemTitle>{title}</NotificationItemTitle>
          <NotificationItemContent>{body}</NotificationItemContent>
        </NotificationItem>
      </ExampleSection>
      <ExampleSection text="Иконка закрытия, заголовок, текст, TextButton без иконки статуса (для мобильной версии)">
        <NotificationItem status="info" isClosable style={{ width: '320px' }}>
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

export const Route = createFileRoute('/components/notification/states')({
  component: () => <Template />,
  staticData: {
    title: 'Notification. Состояния',
    description: '',
  },
});
