import { createFileRoute } from '@tanstack/react-router';
import styled from 'styled-components';
import { ExampleSection } from '../../-helpers/examples';
import { FloatingButton, FloatingButtonMenu } from '@admiral-ds/react-ui';
import EmailOutline from '@admiral-ds/icons/build/system/EmailOutline.svg?react';
import DeleteOutline from '@admiral-ds/icons/build/system/DeleteOutline.svg?react';
import PrintOutline from '@admiral-ds/icons/build/system/PrintOutline.svg?react';

const Layout = styled.div`
  width: 100%;
  height: 100px;
  transform: scale(1);
`;

export const Template = () => {
  return (
    <ExampleSection text="Позволяет вызывать дополнительные действия нажатием на основную кнопку. Тип дополнительных кнопок всегда Secondary. Основная кнопка может быть как Primary, так и Secondary. Рекомендуется не более 5 дополнительных кнопок. Повторное нажатие на основную кнопку закрывает меню дополнительных кнопок. Так же, меню закрывается при клике вне группы кнопок. В закрытом состоянии кнопка может содержать любую иконку, при открытии иконка меняется на иконку «Close».">
      <Layout>
        <FloatingButtonMenu
          icon={<EmailOutline />}
          // eslint-disable-next-line no-console
          onOpenChange={(isOpen) => console.log(isOpen ? 'Open menu' : 'Close menu')}
        >
          <FloatingButton appearance="secondary">
            <DeleteOutline />
          </FloatingButton>
          <FloatingButton appearance="secondary">
            <PrintOutline />
          </FloatingButton>
        </FloatingButtonMenu>
      </Layout>
    </ExampleSection>
  );
};

export const Route = createFileRoute('/components/floatingButton/withMenu')({
  component: () => <Template />,
  staticData: {
    title: 'FloatingButtonMenu.',
    description: '',
  },
});
